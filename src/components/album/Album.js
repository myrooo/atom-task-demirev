import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";
import AlbumsList from "./AlbumsList";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import * as albumActions from "../../redux/actions/albumActions";
import axios from "axios";
import { toast } from "react-toastify";

const USER_SERVICE_URL = "https://jsonplaceholder.typicode.com/photos";

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      isLoading: false,
      error: null,
      redirectToAddCoursePage: false
    };
  }

  componentDidMount() {
    const { actions } = this.props;

    this.setState({ isLoading: true });
    axios
      .get(USER_SERVICE_URL)
      .then(response =>
        this.setState({
          albums: response.data
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  handleViewDetails = async album => {
    toast.success("Album Opened");
    try {
      await this.props.actions.viewAlbum(album);
    } catch (error) {
      toast.error("Viewing failed." + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <>
            <h2>ALBUMS</h2>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
            >
              Add Album
            </button>

            <AlbumsList
              onClick={this.handleViewDetails}
              albums={this.state.albums}
            />
          </>
        )}
      </>
    );
  }
}

Album.propTypes = {
  albums: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    albums:
      state.albums.length === 0
        ? []
        : state.albums.map(album => {
            return {
              ...album,
              albumId: state.albums.find(a => a.id === album.albumId),
              title: state.albums.find(a => a.title === album.title)
            };
          }),
    isLoading: false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAlbum: bindActionCreators(albumActions.loadAlbums, dispatch),
      viewAlbum: bindActionCreators(albumActions.viewAlbum, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);

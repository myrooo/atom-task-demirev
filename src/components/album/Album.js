import React, { Component, useCallback, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AlbumList from "./AlbumList";
import AlbumDetail from "./AlbumDetail";
import Spinner from "../common/Spinner";
import PropTypes from "prop-types";
import * as albumActions from "../../redux/actions/albumActions";
import axios from "axios";

const USER_SERVICE_URL = "https://jsonplaceholder.typicode.com/photos";

class Album extends Component {
  state = {
    isLoading: false
  };

  componentWillUnmount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
 

    const { albums, actions } = this.props;

    if (albums.length === 0) {
      actions
        .loadAlbums()
        .then(this.setState({ isLoading: false }))
        .catch(error => {
          alert("Loading albums failed" + error);
        });
    }
    // this.setState({ isLoading: false });
  }

  // handleFavoriteAlbums = id => {
  //   this.props.actions.saveToFavorites(
  //     this.props.albums.filter(album => album.id === id)
  //   );
  //   console.log(id);
  // };

  render() {
    return (
      <>
        <>
          <h2>ALBUMS</h2>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
          >
            Add Album
          </button>
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <>
              {this.isDetailedView ? (
                <AlbumDetail id={1} title={"daadada"} />
              ) : (
                <AlbumList albums={this.props.albums} 
                />
              )}
            </>
          )}
        </>
      </>
    );
  }
}

Album.propTypes = {
  albums: PropTypes.array.isRequired,
  favoriteAlbums: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    albums: state.albums.length === 0 ? [] : state.albums,
    favoriteAlbums: state.favoriteAlbums
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAlbums: bindActionCreators(albumActions.loadAlbums, dispatch),
      saveToFavorites: bindActionCreators(
        albumActions.saveToFavoritesSuccess,
        dispatch
      ),

    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);

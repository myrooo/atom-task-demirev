import React, { useContext, useMemo } from "react";
import { func } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as albumActions from "../redux/actions/albumActions";

class FavoriteAlbums extends React.Component {
  componentDidMount() {
    // const { favoriteAlbums, actions } = this.props;
    this.viewAlbumFavorites();

   
    const { favoriteAlbums, actions } = this.props;

    // this.setState(
    //     this.props.favoriteAlbums: [
    //      {albumId:1,id:1,title:'accusam…0/92c952'}
    //   ] );

    console.log("LOGGING FAV ALBUMS");
    console.log(this.props.favoriteAlbums);
  }

  render() {
    return (
      <>
        <div>
          <h1>FAVORITE ALBUMS</h1>
        </div>
        {/* {this.albums.map(album => {
         <div className="card col-4 cardmin">
         <div className="card-body">
           <img className="card-img-top" src={album.imageUrl} alt="No" />
           <h4 className="card-title">
             <button
              //  className={favorite ? "heartredbutton" : "heartdarkbutton"}
               onClick={() => {
                //  setFavorite(true);
                //  this.handleFavoriteAlbums(id);
               }}
             />
             <span>
               Id={album.id} {album.title} {album.imageUrl}
             </span>
           </h4>
         </div>
       </div>
        })} */}
      </>
    );
  }
}

FavoriteAlbums.propTypes = {
  favoriteAlbums: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    favoriteAlbums: { ...state, ...state.favoriteAlbums }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      viewAlbumFavorites: bindActionCreators(
        albumActions.viewAlbumFavorites,
        dispatch
      )
    }
  };
}

export default connect(mapDispatchToProps, mapStateToProps)(FavoriteAlbums);

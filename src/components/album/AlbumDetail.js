import React, {
  useState,
  useContext,
  useCallback,
  useMemo,
  useEffect
} from "react";
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  saveToFavoritesSuccess,
  saveToFavorites
} from "../../redux/actions/albumActions";
import * as types from "../../redux/actions/actionTypes";

const AlbumDetail = ({ id, title, imageUrl }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="card col-4 cardmin">
      <div className="card-body">
        <img className="card-img-top" src={imageUrl} alt="No" />
        <h4 className="card-title">
          <button
            className={favorite ? "heartredbutton" : "heartdarkbutton"}
            onClick={() => {
              // saveToFavorites(id);
              saveToFavorites(id)
              favorite ? setFavorite(false) : setFavorite(true);
              console.log("clicked");
            }}
          />
          <span>
            Id={id} {title} {imageUrl}
          </span>
        </h4>
      </div>
    </div>
  );
};

AlbumDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    albums: { ...state.albums },
    favoriteAlbums: state.favoriteAlbums
  };
}
// const saveToFavorites = id => ({ type: types.SAVE_TO_FAVORITES_SUCCESS, id });

// function mapDispatchToProps(dispatch) {
//   return {
//     saveToFavorites: id => dispatch(saveToFavorites(id))
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    saveToFavorites: id => { dispatch({type:types.SAVE_TO_FAVORITES,id})},
    // saveToFavorites: bindActionCreators(saveToFavorites, dispatch)
  };
  // sendMessage: messaga => {
  //   dispatch(sendMessage(message));
  //   dispatch(navigateTo({ routeName: 'messagesList' }));
  //   },
}



export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);



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
import * as albumActions from "../../redux/actions/albumActions";
import * as types from "../../redux/actions/actionTypes";

const AlbumDetail = ({ id, title, imageUrl }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(
    () =>
      function saveToFavorites(id) {
        dispatch({ type: "SAVE_TO_FAVORITES_SUCCESS", id });
      }
  );

  return (
    <div className="card col-4 cardmin">
      <div className="card-body">
        <img className="card-img-top" src={imageUrl} alt="No" />
        <h4 className="card-title">
          <button
            className={favorite ? "heartredbutton" : "heartdarkbutton"}
            onClick={() => {
              saveToFavorites(id);
              favorite ? setFavorite(false) : setFavorite(true);
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
  saveToFavorites: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    albums: { ...state.albums },
    favoriteAlbums: state.favoriteAlbums
  };
}
const saveToFavorites = id => ({ type: "SAVE_TO_FAVORITES_SUCCESS", id });

function mapDispatchToProps(dispatch) {
  return {
    saveToFavorites: id => dispatch(saveToFavorites(id))
  };
}

export default connect(mapDispatchToProps, mapStateToProps)(AlbumDetail);

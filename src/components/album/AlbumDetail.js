import React from "react";
import PropTypes from "prop-types";

const AlbumDetail = ({ id, title, imageUrl, favorite, handleFavorite }) => {
  // const id = props.id;
  // const title = props.title;
  // const imageUrl = props.url;

  return (
    <div className="card col-4 cardmin">
      <div className="card-body">
        <img className="card-img-top" src={imageUrl} alt="No" />
        <h4 className="card-title">
          <button
            className={favorite ? "heartredbutton" : "heartdarkbutton"}
            onClick={handleFavorite}
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
  imageUrl: PropTypes.string.isRequired
};

export default AlbumDetail;

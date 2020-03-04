import React from "react";
import PropTypes from "prop-types";

// "albumId": 1,
// "id": 1,
// "title": "accusamus beatae ad facilis cum similique qui sunt",
// "url": "https://via.placeholder.com/600/92c952",
// "thumbnailUrl"

const AlbumsList = ({ albums, handleViewDetails }) => (
  <table className="table">
    <thead>
      <tr>
        <th>albumId</th>
        <th>Id</th>
        <th>Tittle</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <>
        {albums.map(album => {
          return (
            <tr key={album.id}>
              <td>{album.albumId}</td>
              <td>{album.id}</td>
              <td>{album.title}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleViewDetails(album)}
                >
                  View
                </button>
              </td>
            </tr>
          );
        })}
      </>
    </tbody>
  </table>
);

AlbumsList.propTypes = {
  albums: PropTypes.array.isRequired
};

export default AlbumsList;

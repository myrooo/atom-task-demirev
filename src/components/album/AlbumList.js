import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import AlbumDetail from "./AlbumDetail";
import "../../../static/site.css";
import axios from "axios";
import { connect } from "react-redux";

const AlbumList = ({ albums }) => {
 
  const [isOpen, setOpen] = useState(false);
  const [currAlbum, setCurrAlbum] = useState({});
  const [favorite, setFavorite] = useState(false);

  function handleFavorite() {
    favorite ? setFavorite(false) : setFavorite(true);
  }

  function handleViewDetail(album) {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?id=${album.id}`)
      .then(function(response) {
        setCurrAlbum(response.data[0]);
        setOpen(true);
      })
      .catch(function(error) {
        console.log(error);
      });

    // setOpen(true);
    // return albums.filter(currAlbum=> currAlbum.id === album.id);

  }

  return (
    <>
      {isOpen ? (
        <AlbumDetail
          id={currAlbum.id}
          title={currAlbum.title}
          imageUrl={currAlbum.url}
          handleFavorite={handleFavorite}
        />
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>albumId</th>
                <th>Id</th>
                <th>Tittle</th>
                <th> Favourites</th>
              </tr>
            </thead>
            <>
              {albums.map(album => {
                return (
                  <tbody key={album.id}>
                    <tr>
                      <td>{album.albumId}</td>
                      <td>{album.id}</td>
                      <td>{album.title}</td>
                      <td>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => {
                            handleViewDetail(album);
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </>
          </table>
          );
        </>
      )}
    </>
  );
};

AlbumList.propTypes = {
  albums: PropTypes.array.isRequired
};

export default connect(null, null)(AlbumList);

//export default AlbumList;

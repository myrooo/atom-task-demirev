import * as types from "./actionTypes";
import { handleError, handleResponse } from "../../api/apiUtils";
import { func } from "prop-types";

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: types.API_CALL_ERROR };
}

export function loadAlbumsSuccess(albums) {
  return {
    type: types.LOAD_ALBUMS_SUCCESS,
    albums,
    // isLoading: false
  };
}

export function saveToFavoritesSuccess(id){
  return{
    type: types.SAVE_TO_FAVORITES_SUCCESS,
    id
  }
}

export function viewAlbumFavorites(favoriteAlbums) {
  return { type: types.VIEW_FAVORITES_SUCCESS, favoriteAlbums };
}

const baseUrl = "https://jsonplaceholder.typicode.com/photos";

export function getAlbums() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function loadAlbums() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return getAlbums()
      .then(albums => {
        dispatch(loadAlbumsSuccess(albums));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

// export function saveToFavorites(){
//   return function(dispatch){
//     dispatch(beginApiCall());
//     return getAlbums()
//     .then(albums => {
//       dispatch(saveToFavoritesSuccess(albums));
//     })
//     .catch(error => {
//       dispatch(apiCallError(error));
//       throw error;
//     });
//   }
// }
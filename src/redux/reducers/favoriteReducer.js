import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
      case types.SAVE_TO_FAVORITES_SUCCESS:
        return [
          ...state.favoriteAlbums,
          ...state.albums.filter(album => album.id === action.id)
        ];
      case types.VIEW_FAVORITES_SUCCESS:
        return state.favoriteAlbums;
    default:
      return state;
  }
}

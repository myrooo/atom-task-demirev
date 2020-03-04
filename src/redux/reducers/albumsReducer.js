import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function albumReducer(state = initialState.albums, action) {
  switch (action.type) {
    case types.LOAD_ALBUMS:
      return [...state, { ...action.albums }];
    case types.VIEW_ALBUM:
      return [...state, { ...action.album.url }];
    default:
      return state;
  }
}

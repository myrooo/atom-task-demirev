import * as types from "./actionTypes";

export function loadAlbums(albums) {
  return { type: types.LOAD_ALBUMS, albums };
}

export function viewAlbum(album) {
  return { type: types.VIEW_ALBUM, album };
}

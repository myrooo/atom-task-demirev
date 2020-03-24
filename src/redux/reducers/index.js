import { combineReducers } from "redux";
import albumReducer from "./albumsReducer";
import favoriteReducer from "./favoriteReducer"

const rootReducer = combineReducers({
  albums: albumReducer,
  saveToFavorites:favoriteReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import albumReducer from "./albumsReducer";

const rootReducer = combineReducers({
  albums: albumReducer
});

export default rootReducer;

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import albumReducer from "./redux/reducers/albumsReducer";
import favoriteReducer from "./redux/reducers/favoriteReducer";

const rootReducer = combineReducers({
  albums: albumReducer,
  favoriteReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoriteReducer","albumReducer"]
};

export const configureStore = initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export function persistor(){
  return persistStore(configureStore);}

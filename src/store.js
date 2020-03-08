import { createStore, applyMiddleware, combineReducers } from "redux"
import { persistStore, persistReducer  } from "redux-persist"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import storage from 'redux-persist/lib/storage'
import albumReducer from "./redux/reducers/albumsReducer" 


const rootReducer = combineReducers({
    albums: albumReducer
  });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )

// export const persistor = persistStore(store)

//export type AppState = ReturnType<typeof rootReducer>
const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
  }


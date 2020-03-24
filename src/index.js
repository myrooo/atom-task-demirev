import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { Provider as ReduxProvider } from "react-redux";
//HOC provide redux store data to child components
import { PersistGate } from "redux-persist/integration/react";
import {configureStore, persistor } from "./configureStore";
import initialState from "./redux/reducers/initialState"

const store = configureStore(initialState);

render(
  <ReduxProvider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <Router>
        <App />
      </Router>
    {/* </PersistGate> */}
  </ReduxProvider>,
  document.getElementById("app")
);

// ReactDOM.render(
//   <ToastProvider components={{ ToastContainer: MyCustomToastContainer }}>
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <Notifications />
//         <Routing />
//       </PersistGate>
//     </Provider>
//   </ToastProvider>,
// document.getElementById("root")
// )

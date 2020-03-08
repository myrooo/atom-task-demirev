import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "../PageNotFound";
import Album from "./album/Album";
import store from "../store";
import persistor from "../store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//import ManageCoursesPage from "./courses/ManageCoursesPage"; //eslint-disable-line import/no-named-as-default

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      {/* <Provider store={store}>
            PersistGate persistor={persistor}>*/}
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/albums" component={Album} />
            <Route component={PageNotFound} />
      </Switch>
      {/* </PersistGate> */}

      {/* </Provider> */}
    </div>
  );
}

export default App;

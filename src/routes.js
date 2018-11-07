import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
// import ab from './components/';
// import abc from './components/';
import Page404 from "./components/page404/Page404";

const AppRoutes = () => (
  <App>
    <Switch>
      {/* <Route exact path="/profile" component={ab} />
      <Route exact path="" component={abc} /> */}
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRoutes;

import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
// import ab from './components/';
import Main from './components/main/Main';
import Page404 from "./components/page404/Page404";

const AppRoutes = () => (
  <App>
    <Switch>
      {/* <Route exact path="/profile" component={ab} /> */}
      <Route exact path="/" component={Main} />
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRoutes;

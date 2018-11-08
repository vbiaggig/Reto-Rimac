import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
// import ab from './components/';
import Landing from './components/Landing';
import Page404 from "./components/Page404";
import Quotation from "./components/Quotation";
import StepperPage from "./components/StepperPage";
import FormVenta from "./components/FormVenta";
import Successful from "./components/Successful";

const AppRoutes = () => (
  <App>
    <Switch>
      {/* <Route exact path="/profile" component={ab} /> */}
      <Route exact path="/Reto-Rimac/" component={Landing} />
      <Route exact path="/Reto-Rimac/Cotizacion" component={Quotation} />
      <Route exact path="/Reto-Rimac/Venta" component={StepperPage} />
      <Route exact path="/Reto-Rimac/VentaTarjeta" component={FormVenta} />
      <Route exact path="/Reto-Rimac/Completado" component={Successful} />
      <Route component={Page404} />
    </Switch>
  </App>
);

export default AppRoutes;

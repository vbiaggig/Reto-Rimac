import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes'
import './index.css';
import './quotation.css';
import * as serviceWorker from './serviceWorker';

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

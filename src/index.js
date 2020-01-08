import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import RealtyService from './service';
import { RealtyServiceProvider } from './components/service-context';
import App from './components/app';

const realtyService = new RealtyService();

ReactDOM.render(
  <RealtyServiceProvider value={realtyService}>
    <Router>
      <App />
    </Router>
  </RealtyServiceProvider>,
  document.getElementById('root'));

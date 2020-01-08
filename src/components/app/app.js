import React from 'react';
import { Route } from 'react-router-dom';

import EstateListPage from '../pages/estate-list-page';
import EstateObjectPage from '../pages/estate-object-page';

import './app.scss';

export default class App extends React.Component {

  render() {

    return (
      <main role="main" className="app">
        <Route
          path="/"
          component={EstateListPage}
          exact />
        <Route
          path="/:id"
          component={EstateObjectPage}
          />
      </main>
    );
  }
}

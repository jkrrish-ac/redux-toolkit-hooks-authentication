import React from 'react';
import './App.css';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './app/components/PrivateRoute';
import { history } from './helpers/history';
import { LoginPage, TodoListPage } from './app/pages';


function App() {
  return (
          <Router history={history}>
            <Switch>
              <Route exact path="/login" component={LoginPage} />

              <PrivateRoute exact path="/">
                <Redirect to={{ pathname: '/v1' }} />
              </PrivateRoute>
              <PrivateRoute path="/v1" component={TodoListPage} />
            </Switch>
          </Router>
  );
}

export default App;

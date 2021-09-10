import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './app/components/PrivateRoute';
import { history } from './helpers/history';
import { LoginPage, TodoListPage , DynamicFormPage } from './app/pages';
import 'antd/dist/antd.css';
import './App.css';


function App() {
  return (
          <Router history={history}>
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/dynamic-form" component={DynamicFormPage} />
              <PrivateRoute exact path="/">
                <Redirect to={{ pathname: '/v1' }} />
              </PrivateRoute>
              <PrivateRoute path="/v1" component={TodoListPage} />
            </Switch>
          </Router>
  );
}

export default App;

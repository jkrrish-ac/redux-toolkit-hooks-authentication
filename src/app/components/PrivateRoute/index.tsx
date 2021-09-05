import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../services/authenticationService';

export const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

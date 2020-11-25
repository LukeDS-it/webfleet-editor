import React, {useContext} from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AuthContext} from 'utils/Auth';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType;
}

export default function PrivateRoute({component: Component, path, ...rest}: PrivateRouteProps) {
  const {currentUser} = useContext(AuthContext);

  const render = (props: RouteProps) =>
    !!currentUser ? <Component {...props} /> : <Redirect to={'/login'}/>

  return <Route path={path} render={render} {...rest} />;
}

import React, {useEffect} from 'react';
import {Route, RouteProps} from 'react-router';
import {useAuth0} from '../../utils/react-auth0-wrapper';

export default function PrivateRoute({component: Component, path, ...rest}: PrivateRouteProps) {
  const {loading, authenticated, loginWithRedirect} = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if (loading === false && !authenticated) {
        if (loginWithRedirect) {
          await loginWithRedirect({appState: {targetUrl: path}});
        }
      }
    };
    fn();
  }, [loading, authenticated, loginWithRedirect, path]);

  const render = (props: RouteProps) => authenticated === true ? <Component {...props} /> :
      <div> Loading... </div>;

  return <Route path={path} render={render} {...rest} />;
}

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType
}
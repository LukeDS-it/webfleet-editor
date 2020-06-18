import {Redirect, Route} from 'react-router';
import React from 'react';

export class PrivateRoute extends Route {

  authenticated: boolean = true;

  render() {
    return this.authenticated
        ? super.render()
        : <Redirect to={{pathname: '/login'}}/>;
  }
}
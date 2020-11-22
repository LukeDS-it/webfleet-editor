import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {DomainsViewer} from './components/layout/domains-viewer/DomainsViewer';
import history from './utils/history';
import {AuthProvider} from "./utils/Auth";
import PrivateRoute from "./components/ui/PrivateRoute";
import {LoginView} from "./components/layout/login/LoginView";

const App = () => {

  return (
      <AuthProvider>
        <Router history={history}>
          <Switch>
            <PrivateRoute path='/' exact component={DomainsViewer}/>
            <Route path='/login' exact component={LoginView}/>
          </Switch>
        </Router>
      </AuthProvider>
  );

};

export default App;

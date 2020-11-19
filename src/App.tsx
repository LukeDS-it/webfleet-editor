import React from 'react';
import {Router, Switch} from 'react-router-dom';
import {DomainsViewer} from './components/layout/domains-viewer/DomainsViewer';
import history from './utils/history';
import {AuthProvider} from "./utils/Auth";
import PrivateRoute from "./components/ui/PrivateRoute";

const App = () => {

  return (
      <AuthProvider>
        <Router history={history}>
          <Switch>
            <PrivateRoute path='/' exact component={DomainsViewer}/>
          </Switch>
        </Router>
      </AuthProvider>
  );

};

export default App;

import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {DomainsViewer} from './components/layout/domains-viewer/DomainsViewer';
import {ExternalRedirect} from './components/ui/ExternalRedirect';
import history from './utils/history';
import PrivateRoute from './components/ui/PrivateRoute';

const App = () => {

  return (
      <Router history={history}>
        <Switch>
          <PrivateRoute path='/' exact component={DomainsViewer}/>
          <Route path='/login' exact>
            <ExternalRedirect url={'http://ldsoftware.it'}/>
          </Route>
        </Switch>
      </Router>
  );

};

export default App;

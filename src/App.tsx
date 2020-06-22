import React from 'react';
import {Router, Switch} from 'react-router-dom';
import {DomainsViewer} from './components/layout/domains-viewer/DomainsViewer';
import history from './utils/history';
import PrivateRoute from './components/ui/PrivateRoute';

const App = () => {

  return (
      <Router history={history}>
        <Switch>
          <PrivateRoute path='/' exact component={DomainsViewer}/>
        </Switch>
      </Router>
  );

};

export default App;

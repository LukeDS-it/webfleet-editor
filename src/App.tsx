import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {DomainsViewer} from './components/layout/domains-viewer/DomainsViewer';
import history from './utils/history';

const App = () => {

  return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={DomainsViewer}/>
        </Switch>
      </Router>
  );

};

export default App;

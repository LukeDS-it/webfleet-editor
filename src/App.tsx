import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {DomainsViewer} from 'components/layout/domains-viewer/DomainsViewer';
import history from './utils/history';
import {AuthProvider} from 'utils/Auth';
import PrivateRoute from 'components/ui/PrivateRoute';
import {LoginView} from 'components/layout/login/LoginView';
import {LoadingScreen} from 'components/ui/loading-screen/LoadingScreen';
import {DomainDashboard} from 'components/layout/domain-dashboard/DomainDashboard';

const App = () => {

  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <Route path='/login' exact component={LoginView}/>
          <Route path='/loading' exact component={LoadingScreen} />
          <PrivateRoute path='/' exact component={DomainsViewer}/>
          <PrivateRoute path='/:siteId/dashboard' exact component={DomainDashboard}/>
          <PrivateRoute path='/:siteId' exact component={DomainDashboard}/>
        </Switch>
      </Router>
    </AuthProvider>
  );

};

export default App;

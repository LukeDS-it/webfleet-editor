import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {DomainsViewer} from 'components/layout/domains-viewer/DomainsViewer';
import history from './utils/history';
import {AuthProvider} from 'utils/Auth';
import PrivateRoute from 'components/ui/PrivateRoute';
import {LoginView} from 'components/layout/login/LoginView';
import {LoadingScreen} from 'components/ui/loading-screen/LoadingScreen';
import {ProjectView} from 'components/layout/project-view/ProjectView';

const App = () => {

  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <Route path='/login' exact component={LoginView}/>
          <Route path='/loading' exact component={LoadingScreen} />
          <PrivateRoute path='/' exact component={DomainsViewer}/>
          <PrivateRoute path='/projects/:domainId/:feature' component={ProjectView}/>
        </Switch>
      </Router>
    </AuthProvider>
  );

};

export default App;

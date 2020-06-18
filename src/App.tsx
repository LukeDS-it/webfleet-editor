import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {DomainsViewer} from './components/layout/domains-viewer/DomainsViewer';
import {PrivateRoute} from './components/ui/PrivateRoute';
import {ExternalRedirect} from './components/ui/ExternalRedirect';


export class App extends Component<any, AppState> {

  constructor(params: any) {
    super(params);
    this.state = new AppState();
  }

  render() {
    return (
        <Router>
          <Switch>
            <PrivateRoute path='/' exact component={DomainsViewer}/>
            <Route path='/login' exact>
              <ExternalRedirect url={'http://ldsoftware.it'}/>
            </Route>
          </Switch>
        </Router>
    );
  }

}

class AppState {

}

import {Router, Switch, useParams} from 'react-router';
import React from 'react';
import history from 'utils/history';
import PrivateRoute from 'components/ui/PrivateRoute';
import {DomainDashboard} from 'components/layout/domain-dashboard/DomainDashboard';
import './ProjectView.scss';

export function ProjectView() {

  const {feature} = useParams<ProjectViewProps>();

  return <div className={'main-control-panel'}>
    <div className={'lateralMenu'}>
      This is the menu, selected feature is {feature}
    </div>
    <div className={'working-area'}>
      <Router history={history}>
        <Switch>
          <PrivateRoute path='/projects/:domainId/dashboard' component={DomainDashboard}/>
        </Switch>
      </Router>
    </div>
  </div>

}

export interface ProjectViewProps {
  domainId: string,
  feature: string
}

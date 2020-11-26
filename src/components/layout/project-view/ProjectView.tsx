import {Router, Switch, useParams} from 'react-router';
import React from 'react';
import history from 'utils/history';
import PrivateRoute from 'components/ui/PrivateRoute';
import {DomainDashboard} from 'components/layout/domain-dashboard/DomainDashboard';
import './ProjectView.scss';
import {ProjectMenu} from 'components/ui/project-menu/ProjectMenu';

export function ProjectView() {

  const {feature} = useParams<ProjectViewProps>();

  return <div className={'main-control-panel'}>
    <div className={'lateral-menu'}>
      <ProjectMenu selectedFeature={feature} />
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

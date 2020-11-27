import {Router, Switch, useParams} from 'react-router';
import React from 'react';
import history from 'utils/history';
import PrivateRoute from 'components/ui/PrivateRoute';
import {DomainDashboard} from 'components/layout/domain-dashboard/DomainDashboard';
import './ProjectView.scss';
import {ProjectMenu} from 'components/ui/project-menu/ProjectMenu';
import {DomainPages} from 'components/layout/domain-pages/DomainPages';
import {DomainBlog} from 'components/layout/domain-blog/DomainBlog';
import {DomainConfiguration} from 'components/layout/domain-configuration/DomainConfiguration';
import {DomainResources} from 'components/layout/domain-resources/DomainResources';
import {DomainAccessList} from 'components/layout/domain-access-list/DomainAccessList';

export function ProjectView() {

  const {domainId, feature} = useParams<ProjectViewProps>();

  return <div className={'main-control-panel'}>
    <div className={'lateral-menu'}>
      <ProjectMenu selectedFeature={feature} domainId={domainId}/>
    </div>
    <div className={'working-area'}>
      <Router history={history}>
        <Switch>
          <PrivateRoute path='/projects/:domainId/dashboard' component={DomainDashboard}/>
          <PrivateRoute path='/projects/:domainId/pages' component={DomainPages}/>
          <PrivateRoute path='/projects/:domainId/blog' component={DomainBlog}/>
          <PrivateRoute path='/projects/:domainId/configuration' component={DomainConfiguration}/>
          <PrivateRoute path='/projects/:domainId/resources' component={DomainResources}/>
          <PrivateRoute path='/projects/:domainId/access-list' component={DomainAccessList}/>
        </Switch>
      </Router>
    </div>
  </div>;

}

export interface ProjectViewProps {
  domainId: string,
  feature: string
}

import React from 'react';
import {useParams} from 'react-router';
import {ProjectViewProps} from 'components/layout/project-view/ProjectView';

export function DomainDashboard() {

  const {domainId} = useParams<ProjectViewProps>();

  return <div className={'site-dashboard'}>
    This is the site {domainId}
  </div>

}

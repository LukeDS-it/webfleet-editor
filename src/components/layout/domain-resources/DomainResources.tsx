import React from 'react';
import {useParams} from 'react-router';
import {ProjectViewProps} from 'components/layout/project-view/ProjectView';

export function DomainResources() {

  const {domainId} = useParams<ProjectViewProps>();

  return <div className={'site-dashboard'}>
    Resources of site {domainId}
  </div>

}

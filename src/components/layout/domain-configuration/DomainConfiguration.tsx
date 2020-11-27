import React from 'react';
import {useParams} from 'react-router';
import {ProjectViewProps} from 'components/layout/project-view/ProjectView';

export function DomainConfiguration() {

  const {domainId} = useParams<ProjectViewProps>();

  return <div className={'site-dashboard'}>
    Configure the domain {domainId}
  </div>

}

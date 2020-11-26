import React from 'react';
import {useParams} from 'react-router';
import {ProjectViewProps} from 'components/layout/project-view/ProjectView';

export function DomainPages() {

  const {domainId} = useParams<ProjectViewProps>();

  return <div className={'site-dashboard'}>
    Hierarchical page structure of {domainId}
  </div>

}

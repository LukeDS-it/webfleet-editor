import React from 'react';
import {useParams} from 'react-router';

export function DomainResources() {

  const {domainId} = useParams();

  return <div className={'site-dashboard'}>
    Resources of site {domainId}
  </div>;

}

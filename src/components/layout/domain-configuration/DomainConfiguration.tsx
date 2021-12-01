import React from 'react';
import {useParams} from 'react-router';

export function DomainConfiguration() {

  const {domainId} = useParams();

  return <div className={'site-dashboard'}>
    Configure the domain {domainId}
  </div>;

}

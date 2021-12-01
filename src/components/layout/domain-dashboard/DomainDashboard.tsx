import React from 'react';
import {useParams} from 'react-router-dom';

export function DomainDashboard() {

  const {domainId} = useParams();

  return <div className={'site-dashboard'}>
    This is the site {domainId}
  </div>;

}

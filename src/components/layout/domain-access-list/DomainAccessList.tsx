import React from 'react';
import {useParams} from 'react-router';

export function DomainAccessList() {

  const {domainId} = useParams();

  return <div className={'site-dashboard'}>
    This is the access list of {domainId}
  </div>;

}

import React from 'react';
import {useParams} from 'react-router';

export function DomainPages() {
  const {domainId, pageId = '/'} = useParams();

  return <div className={'site-dashboard'}>
    Hierarchical page structure of {domainId}.
    <br/>
    You are viewing page {pageId}
  </div>;

}

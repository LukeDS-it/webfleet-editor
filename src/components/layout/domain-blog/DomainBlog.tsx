import React from 'react';
import {useParams} from 'react-router';

export function DomainBlog() {

  const {domainId} = useParams();

  return <div className={'site-dashboard'}>
    This is the blog for {domainId}
  </div>;

}

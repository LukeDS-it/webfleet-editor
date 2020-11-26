import React from 'react';
import {useParams} from 'react-router';


export function DomainDashboard() {

  const {siteId} = useParams<DomainDashboardParams>();

  return <div>
    This is the site {siteId}
  </div>

}

interface DomainDashboardParams {
  siteId: string
}
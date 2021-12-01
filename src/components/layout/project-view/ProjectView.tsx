import {Outlet, useParams} from 'react-router';
import React from 'react';
import './ProjectView.scss';
import {ProjectMenu} from 'components/ui/project-menu/ProjectMenu';

export function ProjectView() {

  const {domainId, feature} = useParams();

  return <div className={'main-control-panel'}>
    <div className={'lateral-menu'}>
      <ProjectMenu selectedFeature={feature} domainId={domainId}/>
    </div>
    <div className={'working-area'}>
        <Outlet />
    </div>
  </div>;

}

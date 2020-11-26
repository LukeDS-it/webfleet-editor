import React from 'react';
import './ProjectMenu.scss';
import {MenuItem} from 'components/ui/menu-item/MenuItem';
import dashboard from 'assets/dashboard.png';
import pages from 'assets/pages.png';
import blog from 'assets/blog.png';
import configuration from 'assets/configuration.png';
import resources from 'assets/resources.png';
import siteIcon from 'assets/icon.png';
import back from 'assets/back.png';

export function ProjectMenu(props: ProjectMenuProps) {

  return <div className={'menu-container'}>
    <div className={'app-title'}>
      <img src={siteIcon} alt={'Go back to your sites'}/>
      Webfleet
    </div>
    <div className={'back-button'}>
      <MenuItem selected={false} icon={back}>
        Back to your projects
      </MenuItem>
    </div>

    <MenuItem selected={props.selectedFeature === 'dashboard'} icon={dashboard}>
      Dashboard
    </MenuItem>
    <MenuItem selected={props.selectedFeature === 'contents'} icon={pages}>
      Pages
    </MenuItem>
    <MenuItem selected={props.selectedFeature === 'blog'} icon={blog}>
      Blog
    </MenuItem>
    <MenuItem selected={props.selectedFeature === 'configuration'} icon={configuration}>
      Configuration
    </MenuItem>
    <MenuItem selected={props.selectedFeature === 'resources'} icon={resources}>
      Resources
    </MenuItem>
  </div>;

}

interface ProjectMenuProps {
  selectedFeature: string
}

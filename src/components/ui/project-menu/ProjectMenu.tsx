import React from 'react';
import './ProjectMenu.scss';
import {MenuItem} from 'components/ui/menu-item/MenuItem';
import dashboard from 'assets/dashboard.png';
import pages from 'assets/pages.png';
import blog from 'assets/blog.png';
import configuration from 'assets/configuration.png';
import resources from 'assets/resources.png';
import siteIcon from 'assets/icon.png';
import share from 'assets/share.png';
import back from 'assets/back.png';
import {useHistory} from 'react-router';

export function ProjectMenu(props: ProjectMenuProps) {

  const history = useHistory();

  function backToProjects() {
    history.push('/');
  }

  function navigateToFeature(feature: String) {
    history.push('/projects/' + props.domainId + '/' + feature);
  }

  return <div className={'menu-container'}>
    <div className={'app-title'}>
      <img src={siteIcon} alt={'Go back to your sites'}/>
      Webfleet
    </div>
    <div className={'back-button'} onClick={backToProjects}>
      <MenuItem selected={false} icon={back}>
        Back to your projects
      </MenuItem>
    </div>

    <MenuItem
      selected={props.selectedFeature === 'dashboard'}
      icon={dashboard}
      onClick={() => navigateToFeature('dashboard')}
    >
      Dashboard
    </MenuItem>
    <MenuItem
      selected={props.selectedFeature === 'pages'}
      icon={pages}
      onClick={() => navigateToFeature('pages')}
    >
      Pages
    </MenuItem>
    <MenuItem
      selected={props.selectedFeature === 'blog'}
      icon={blog}
      onClick={() => navigateToFeature('blog')}
    >
      Blog
    </MenuItem>
    <MenuItem
      selected={props.selectedFeature === 'configuration'}
      icon={configuration}
      onClick={() => navigateToFeature('configuration')}
    >
      Configuration
    </MenuItem>
    <MenuItem
      selected={props.selectedFeature === 'resources'}
      icon={resources}
      onClick={() => navigateToFeature('resources')}
    >
      Resources
    </MenuItem>
    <MenuItem
      selected={props.selectedFeature === 'access-list'}
      icon={share}
      onClick={() => navigateToFeature('access-list')}
    >
      Sharing options
    </MenuItem>
  </div>;

}

interface ProjectMenuProps {
  selectedFeature: string
  domainId: string
}

import React, {Component} from 'react';
import {Domain} from '../../../types/Domain';
import './DomainsViewer.scss';
import addWebsite from '../../../assets/add-website.png';

export class DomainsViewer extends Component {
  state = new DomainsViewerState();

  domainTile(domain: Domain) {
    return (
        <li key={domain.id} onClick={() => alert(`Navigate to ${domain.id}`)}>
          <div>
            <div>
              <img src={domain.icon} alt={`Domain ${domain.title}`}/>
            </div>
            <p>
              {domain.title}
            </p>
          </div>
        </li>
    );
  }

  render() {

    const domList = this.state.domains.map(this.domainTile);

    return <div className={'domain-screen'}>
      <p className={'welcome'}>
        Welcome to Webfleet, Luca! Here are your websites:
      </p>
      <ul className={'domain-list'}>
        {domList}
        <li key={'add-new'} onClick={() => alert('Add new site')}>
          <div>
            <div>
              <img src={addWebsite} alt={'Plus sign'} />
            </div>
            <p>
              Create new site
            </p>
          </div>
        </li>
      </ul>
    </div>;
  }
}

class DomainsViewerState {
  domains: Array<Domain> = [
    new Domain(
        'ldsoftware-website',
        'LDSoftware',
        'https://ldsoftware.it/static/logos/lds_green.png'
    ),
    new Domain(
        'programming-willow-1123',
        'Programmer\'s Console',
        'https://ldsoftware.it/static/images/programming-icon.png'
    )
  ];
}
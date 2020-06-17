import React, {Component} from 'react';
import {Domain} from '../../types/Domain';
import './DomainsViewer.scss';

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

    const domList = this.state.domains.map((dom) => this.domainTile(dom));
    return <div className={'domain-screen'}>
      Hello, Luca, welcome to Webfleet! These are your websites:
      <ul className={'domain-list'}>
        {domList}
        <li key={'add-new'} onClick={() => alert('Add new site')}>
          <div>
            <div>
              <img src={'cross.png'} alt={'Plus image'} />
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
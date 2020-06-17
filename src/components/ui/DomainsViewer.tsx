import React, {Component} from 'react';
import {Domain} from '../../types/Domain';
import './DomainsViewer.css';

export class DomainsViewer extends Component {
  state = new DomainsViewerState();

  domainTile(domain: Domain) {
    return <li onClick={() => alert(`Navigate to ${domain.id}`)}>
      <div>
        <img src={domain.icon} alt={`Domain ${domain.title}`}/>
        <p>
          {domain.title}
        </p>
      </div>
    </li>;
  }

  render() {

    const domList = this.state.domains.map((dom) => this.domainTile(dom));
    return <div className={'domain-screen'}>
      Hello, Luca, welcome to Webfleet! Here are the websites you are managing:
      <ul>
        {domList}
      </ul>
      <button>Add new site</button>
    </div>;
  }
}

class DomainsViewerState {
  domains: Array<Domain> = [
      new Domain (
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
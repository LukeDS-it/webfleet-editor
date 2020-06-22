import React, {useEffect, useState} from 'react';
import {Domain} from '../../../types/Domain';
import './DomainsViewer.scss';
import addWebsite from '../../../assets/add-website.png';
import {useAuth0} from '../../../utils/react-auth0-wrapper';

export function DomainsViewer() {
  const [state, setState] = useState<DomainsViewerState>(new DomainsViewerState());
  const {loading, user, getTokenSilently} = useAuth0();



  useEffect(() => {
    const callApi = async () => {
      if (getTokenSilently) {
        const token = await getTokenSilently();

        const response = await fetch('http://localhost:8080/api/v1/domains', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const responseData = await response.json() as Array<Domain>;

        setState({
          domains: responseData
        })
      }
    }
    callApi();
  }, [])

  if (loading || !user) {
    return <div>loading...</div>;
  }

  const domainTile = (domain: Domain) => {
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
  };

  const domList = state?.domains.map(domainTile);

  return (
      <div className={'domain-screen'}>
        <p className={'welcome'}>
          Welcome to Webfleet, {user.name}! Here are your websites:
        </p>
        <ul className={'domain-list'}>
          {domList}
          <li key={'add-new'} onClick={() => alert('Add new site')}>
            <div>
              <div>
                <img src={addWebsite} alt={'Plus sign'}/>
              </div>
              <p>
                Create new site
              </p>
            </div>
          </li>
        </ul>
      </div>
  );
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
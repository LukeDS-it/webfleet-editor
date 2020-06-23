import React, {useState} from 'react';
import {Domain} from '../../../types/Domain';
import './DomainsViewer.scss';
import addWebsite from '../../../assets/add-website.png';
import {useAuth0} from '../../../utils/react-auth0-wrapper';
import useSWR from 'swr/esm/use-swr';
import {DomainTile} from '../../ui/DomainTile';
import {Modal} from '../../ui/modal/Modal';

export function DomainsViewer() {
  const {loading, user, getTokenSilently} = useAuth0();
  const [modalOpen, setModalOpen] = useState(false);

  const getDomains = async () => {
    const token = await getTokenSilently();
    const response = await fetch(`${process.env.REACT_APP_WEBFLEET_DOMAINS_URL}api/v1/domains`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return await response.json() as Array<Domain>;
  };

  function navigateTo(id: string) {
    alert(`Navigate to ${id}`);
  }

  const {data, error} = useSWR('/api/v1/domains', getDomains);

  if (loading || !user || !data) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Failed to load: {error}</div>;
  }

  const domainTiles = data
  .map(d => <DomainTile key={d.id} icon={d.icon} title={d.title} onClick={() => navigateTo(d.id)}/>);

  return (
      <div className={'domain-screen'}>
        <Modal title={'Create new domain'}
               open={modalOpen}
               onClose={() => setModalOpen(false)}
               onSubmit={() => alert('Clicked submit')}
               submitText={'Create domain'}
               onCancel={() => alert('Clicked cancel')}
        >
          Modal content!!
        </Modal>
        <p className={'welcome'}>
          Welcome to Webfleet, {user.name}! Here are your websites:
        </p>
        <ul className={'domain-list'}>
          {domainTiles}
          <DomainTile key={'add-new'}
                      icon={addWebsite}
                      title={'Create new site'}
                      onClick={() => setModalOpen(true)}
          />
        </ul>
      </div>
  );
}

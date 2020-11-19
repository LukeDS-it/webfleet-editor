import React, {useState} from 'react';
import {Domain} from '../../../types/Domain';
import './DomainsViewer.scss';
import addWebsite from '../../../assets/add-website.png';
import useSWR from 'swr/esm/use-swr';
import {DomainTile} from '../../ui/DomainTile';
import {DomainsModal} from '../domains-modal/DomainsModal';
import {FormMode} from '../../../types/FormMode';

export function DomainsViewer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<FormMode>('create');

  const getDomains = async () => {
    const response = await fetch(`${process.env.REACT_APP_WEBFLEET_DOMAINS_URL}api/v1/domains`, {});

    return await response.json() as Array<Domain>;
  };

  function navigateTo(id: string) {
    alert(`Navigate to ${id}`);
  }

  const {data, error} = useSWR('/api/v1/domains', getDomains);

  if (!data) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Failed to load: {error}</div>;
  }

  const domainTiles = data
  .map(d => <DomainTile key={d.id} icon={d.icon} title={d.title}
                        onClick={() => navigateTo(d.id)}/>);

  return (
      <div className={'domain-screen'}>
        <DomainsModal modalOpen={modalOpen} onClose={() => setModalOpen(false)} mode={modalType}/>
        <p className={'welcome'}>
          Welcome to Webfleet! Here are your websites:
        </p>
        <ul className={'domain-list'}>
          {domainTiles}
          <DomainTile key={'add-new'}
                      icon={addWebsite}
                      title={'Create new site'}
                      onClick={() => {
                        setModalOpen(true);
                        setModalType('create');
                      }}
          />
        </ul>
      </div>
  );
}

import React, {useContext, useState} from 'react';
import './DomainsViewer.scss';
import addWebsite from 'assets/add-website.png';
import useSWR from 'swr/esm/use-swr';
import {DomainTile} from 'components/ui/DomainTile';
import {DomainsModal} from 'components/layout/domains-modal/DomainsModal';
import {FormMode} from 'types/FormMode';
import {findAll} from 'api/domainsApi';
import {AuthContext} from 'utils/Auth';
import {LoadingScreen} from 'components/ui/loading-screen/LoadingScreen';


export function DomainsViewer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<FormMode>('create');
  const {currentUser} = useContext(AuthContext);

  function navigateTo(id: string) {
    alert(`Navigate to ${id}`);
  }

  const {data, error} = useSWR('/api/v1/domains', findAll);

  if (!data) {
    return <LoadingScreen />;
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
        Welcome to Webfleet {currentUser.displayName}! Here are your websites:
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

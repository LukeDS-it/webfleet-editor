import React, {useContext, useState} from 'react';
import './DomainsViewer.scss';
import addWebsite from 'assets/add-website.png';
import useSWR from 'swr/esm/use-swr';
import {DomainTile} from 'components/ui/DomainTile';
import {DomainsModal} from 'components/layout/domains-modal/DomainsModal';
import {FormMode} from 'types/FormMode';
import {createDomain, findAll} from 'api/domainsApi';
import {AuthContext} from 'utils/Auth';
import {LoadingScreen} from 'components/ui/loading-screen/LoadingScreen';
import {DomainForm} from 'types/DomainForm';
import {mutate} from 'swr';
import {useNavigate} from 'react-router';


export function DomainsViewer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<FormMode>('create');
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();

  function navigateTo(id: string) {
    navigate('projects/' + id + '/dashboard');
  }

  const {data, error} = useSWR('/domains', findAll);

  const handleDomainCreation = async (domain: DomainForm) => {
    try {
      await createDomain(domain);
      await mutate('/domains');
    } catch (e) {
      alert(e);
    }
  }

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
      <DomainsModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleDomainCreation}
        mode={modalType}/>
      <p className={'welcome'}>
        Welcome to Webfleet, {currentUser.displayName}!
      </p>
      <ul className={'domain-list'}>
        <DomainTile key={'add-new'}
                    icon={addWebsite}
                    title={'Create new site'}
                    onClick={() => {
                      setModalOpen(true);
                      setModalType('create');
                    }}
        />
        {domainTiles}
      </ul>
    </div>
  );
}

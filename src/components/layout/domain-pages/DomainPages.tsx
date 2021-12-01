import React from 'react';
import {useParams} from 'react-router';
import useSWR from 'swr';
import {getContent} from 'api/pagesApi';
import {LoadingScreen} from 'components/ui/loading-screen/LoadingScreen';
import {useNavigate} from 'react-router-dom';

export function DomainPages() {
  const {domainId, pageId = '/'} = useParams();
  const navigate = useNavigate();

  const {data, error} = useSWR(`/pages/${pageId}`, () => getContent(domainId, pageId));

  if (!data) {
    return <LoadingScreen/>;
  }

  if (error) {
    return <div>Failed to load: {error}</div>;
  }

  let children = <div/>;
  if (data.type === 'Folder') {
    const list = data.children.map((c) => <li
      onClick={() => navigate(`/projects/${domainId}/pages/${c.path.substring(1).replace('/', '~')}`)}>{c.title}</li>);
    children = <ul>{list}</ul>;
  }


  return <div className={'site-dashboard'}>
    <h1>{data.title}</h1>
    <p>{data.text}</p>
    {children}
  </div>;

}

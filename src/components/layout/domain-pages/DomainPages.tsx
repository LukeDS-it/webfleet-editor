import React from 'react';
import {useParams} from 'react-router';
import useSWR from 'swr';
import {getContent} from 'api/pagesApi';
import {LoadingScreen} from 'components/ui/loading-screen/LoadingScreen';
import {ExplorerBar} from 'components/layout/domain-pages/ExplorerBar';
import {ChildrenView} from 'components/layout/domain-pages/ChildrenView';

export function DomainPages() {
  const {domainId, pageId = '/'} = useParams();

  const {data, error} = useSWR(`/pages/${pageId}`, () => getContent(domainId, pageId));

  let content = <LoadingScreen/>;

  if (error) {
    content = <div>Failed to load: {error}</div>;
  }

  if (data) {
    let children =
      data.type === 'Folder'
        ? <ChildrenView domainId={domainId} children={data.children}/>
        : <div/>;

    content = <div>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      {children}
    </div>;
  }

  return <div className={'site-dashboard'}>
    <ExplorerBar currentPath={pageId} domain={domainId}/>
    {content}
  </div>;

}

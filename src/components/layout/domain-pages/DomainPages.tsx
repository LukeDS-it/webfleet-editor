import React from 'react';
import {useParams} from 'react-router';
import useSWR from 'swr';
import {getContent, saveContentText} from 'api/pagesApi';
import {LoadingScreen} from 'components/ui/loading-screen/LoadingScreen';
import {ExplorerBar} from 'components/layout/domain-pages/ExplorerBar';
import {ChildrenView} from 'components/layout/domain-pages/ChildrenView';
import RichMarkdownEditor from 'rich-markdown-editor';
import './DomainPages.scss'
import {dark} from 'components/ui/editor/EditorTheme';

export function DomainPages() {
  const {domainId, pageId = '/'} = useParams();

  const {data, error} = useSWR(`/pages/${pageId}`, () => getContent(domainId, pageId));

  const updateContent = (text) => saveContentText(domainId, data.id, text)

  let content = <LoadingScreen/>;

  if (error) {
    content = <div>Failed to load: {error}</div>;
  }

  if (data) {
    let children =
      data.type === 'Folder'
        ? <ChildrenView domainId={domainId} children={data.children}/>
        : <div/>;

    content = <div className={'editor-container'}>
      <h1>{data.title}</h1>
      <RichMarkdownEditor value={data.text} onChange={a => updateContent(a())} theme={dark} />
      {children}
    </div>;
  }

  return <div className={'site-dashboard'}>
    <ExplorerBar currentPath={pageId} domain={domainId}/>
    {content}
  </div>;

}

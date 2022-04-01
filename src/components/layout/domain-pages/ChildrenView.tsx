import {Content, ContentType} from 'types/Content';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import folder from 'assets/folder.png';
import page from 'assets/page.png';
import './ChildrenView.scss';

export function ChildrenView(params: ChildrenViewParams) {
  const navigate = useNavigate();

  function getPath(domain: string, contentPath: string) {
    return `/projects/${domain}/pages/${contentPath.substring(1).replace('/', '~')}`;
  }

  function toChild(c: Content) {
    return <li onClick={() => navigate(getPath(params.domainId, c.path))} key={c.path}>
      <span>
        {getImage(c.type)}
        {c.title}
      </span>
    </li>;
  }

  function getImage(type: ContentType) {
    switch (type) {
      case 'Folder':
        return <img src={folder} alt={'This is a container'}/>;
      case 'Page':
        return <img src={page} alt={'This is a page'}/>;
    }
  }

  const list = params.children.map(toChild);

  return <ul className={'childContent'}>{list}</ul>;
}

interface ChildrenViewParams {
  domainId: string;
  children: Array<Content>;
}

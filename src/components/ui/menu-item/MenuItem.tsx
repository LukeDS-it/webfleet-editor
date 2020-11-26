import React, {MouseEventHandler, ReactNode} from 'react';

export function MenuItem(props: MenuItemProps) {

  const cssClass =
    (props.selected ? 'menu-item selected' : 'menu-item') +
    (props.addClass ? ' ' + props.addClass : '');

  const icon = props.icon ? <img src={props.icon} className={'menu-item-icon'} alt={''}/> : '';

  return <div className={cssClass} onClick={props.onClick}>
    <div>
      {icon}
      {props.children}
    </div>
  </div>;
}

interface MenuItemProps {
  selected: boolean
  icon?: string
  children?: ReactNode
  addClass?: string
  onClick?: MouseEventHandler
}
import React, {ReactNode} from 'react';

export function MenuItem(props: MenuItemProps) {

  const icon = props.icon ? <img src={props.icon} className={'menu-item-icon'} alt={''}/> : '';

  return <div className={props.selected ? 'menu-item selected' : 'menu-item'}>
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
}
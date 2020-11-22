import React from 'react';

export function DomainTile(props: DomainTileProps) {
  return (
    <li onClick={props.onClick}>
      <div>
        <div>
          <img src={props.icon} alt={`Domain ${props.title}`}/>
        </div>
        <p>
          {props.title}
        </p>
      </div>
    </li>
  );
}

interface DomainTileProps {
  icon: string;
  title: string;
  onClick: () => any;
}

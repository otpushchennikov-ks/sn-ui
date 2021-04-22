import React from 'react';
import { IListItemProps } from './interface';


export default function ListItem({ text, completed }: IListItemProps) {
  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'initial' }}>
      {text}
    </li>
  );
}

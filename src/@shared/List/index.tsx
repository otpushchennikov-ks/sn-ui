import React from 'react';
import { IListProps } from './interface';


export default function List({ children, description }: IListProps) {
  return (
    <>
      {description && <div>{description}</div>}
      <ul>
        {children || 'нет данных'}
      </ul>
    </>
  );
}

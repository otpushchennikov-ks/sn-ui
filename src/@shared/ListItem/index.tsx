import React from 'react';
import { css } from 'styled-components';
import { IListItemProps } from './interface';


export default function ListItem({ text, completed }: IListItemProps) {
  return (
    <li css={css`text-decoration: ${completed ? 'line-through' : 'none'};`}>
      {text}
    </li>
  );
}
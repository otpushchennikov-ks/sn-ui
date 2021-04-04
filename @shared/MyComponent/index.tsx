import React from 'react';
import { IMyComponentProps } from './interface';
import { MyComponentStyled } from './styled';


export default function MyComponent({
  size,
  content,
  header,
}: IMyComponentProps) {
  return (
    <MyComponentStyled size={size}>
      <div className="header">
        {header}
      </div>
      <div className="content">
        {content}
      </div>
    </MyComponentStyled>
  );
}

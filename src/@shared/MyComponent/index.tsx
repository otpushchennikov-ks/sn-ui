import React from 'react';
import { IMyComponentProps } from './interface';
import { MyComponentStyled } from './styled';


export default function MyComponent({
  size,
  content,
  header,
  bgColor = '#fff',
}: IMyComponentProps) {
  return (
    <MyComponentStyled
      size={size}
      bgColor={bgColor}
    >
      <div className="header">
        {header}
      </div>
      <div className="content">
        {content}
      </div>
    </MyComponentStyled>
  );
}

import React, { useContext } from 'react';
import { IMyComponentProps } from './interface';
import { MyComponentStyled } from './styled';
import DictsContext from '@context/DictsContext';


export default function MyComponent({
  size,
  content,
  header,
  bgColor = '#fff',
  mapHeader = header => header.toLowerCase(),
  onClick,
}: IMyComponentProps) {
  const dicts = useContext(DictsContext);

  return (
    <MyComponentStyled
      size={size}
      bgColor={bgColor}
      onClick={onClick}
    >
      <div className="header">
        {mapHeader(header)}
      </div>
      <div className="content">
        <div>
          {dicts
            .district
            ?.map(item => item.name || 'default text')
            .join(', ')
          }
        </div>
        <div>{content}</div>
      </div>
    </MyComponentStyled>
  );
}

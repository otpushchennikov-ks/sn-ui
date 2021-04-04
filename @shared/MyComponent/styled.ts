import styled from 'styled-components';
import { IMyComponentProps } from './interface';


export const MyComponentStyled = styled.div<{ size: IMyComponentProps['size'] }>`
  border: 1px solid #ccc;
  border-radius: 4px;

  .header {
    font-size: ${({ size }) => size === 'normal' ? '32px' : '24px'};
  }

  .content {
    font-size: ${({ size }) => size === 'normal' ? '15px' : '13px'};
  }
`;

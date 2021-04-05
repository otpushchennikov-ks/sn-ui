import styled from 'styled-components';
import { IMyComponentStyledProps } from './interface';


export const MyComponentStyled = styled.div<IMyComponentStyledProps>`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};

  .header {
    font-size: ${({ size }) => size === 'normal' ? '32px' : '24px'};
    margin-bottom: 5px;
  }

  .content {
    font-size: ${({ size }) => size === 'normal' ? '15px' : '13px'};
  }
`;

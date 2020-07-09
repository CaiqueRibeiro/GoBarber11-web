import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  color: #666360;
  border-radius: 8px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #48c9b0;
      border-color: #48c9b0;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #48c9b0;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 15px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 10px;

  svg {
    margin-right: 0;
  }

  span {
    background: #e53030;
    color: #fff;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

    &::before {
      border-color: #e53030 transparent;
    }
  }
`;

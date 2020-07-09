import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  color: #312e38;
  background: #48c9b0;
  height: 50px;
  border-radius: 8px;
  border: 0;
  padding: 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background 0.4s;
  text-transform: uppercase;

  &:hover {
    background: ${shade(0.2, '#48c9b0')};
  }
`;

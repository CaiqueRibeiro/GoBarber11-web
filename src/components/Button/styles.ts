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
  position: relative;
  overflow: hidden;
  transition: 0.8s;

  &:hover {
    background: none;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0 0 50% 50%;
    width: 100%;
    height: 0%;
    background: ${shade(0.2, '#48c9b0')};
    z-index: -1;
    transition: 0.8s;
  }

  &:hover::before {
    height: 180%;
  }
`;

import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 600px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;

  animation: ${appearFromLeft} 1.4s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      text-decoration: none;
      color: #f4ede4;
      display: block;
      font-size: 14px;
      margin-top: 20px;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#f4ede4')};
      }
    }
  }

  > a {
    color: #48c9b0;
    text-decoration: none;
    display: block;
    transition: color 0.3s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 12px;
    }

    &:hover {
      color: ${shade(0.3, '#48c9b0')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

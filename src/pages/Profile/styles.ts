import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    width: 100%;
    height: 144px;
    background: #28262e;
    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;
  margin: -130px auto 0;
  max-width: 600px;

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
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
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 186px;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background-color: #48c9b0;
    border: 0;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: background-color 0.5s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background-color: ${shade(0.2, '#48c9b0')};
    }
  }
`;

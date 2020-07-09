import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 30px 0;
  background-color: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    background: transparent;
    border: 0;
    margin-left: auto;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
      transition: color 0.5s;

      &:hover {
        color: #48c9b0;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #48c9b0;
      font-size: 1.1em;
    }
  }
`;

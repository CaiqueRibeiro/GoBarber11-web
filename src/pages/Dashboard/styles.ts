import styled from 'styled-components';
import { shade } from 'polished';

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

export const Content = styled.main`
  max-width: 1120px;
  margin: 60px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 110px;

  h1 {
    font-size: 36px;
  }

  p {
    font-weight: 500;
    margin-top: 8px;
    color: #48c9b0;
    display: flex;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #48c9b0;
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 40px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 25px;
    border-radius: 16px;
    margin-top: 20px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 1px;
      background: #48c9b0;
      left: 0;
      top: 10%;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 20px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #48c9b0;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 50px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #3e3b47;
    display: block;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #f4ede8;

    svg {
      color: #48c9b0;
      margin-right: 8px;
    }
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 25px;
    border-radius: 16px;
    margin-left: 20px;
    flex: 1;

    img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }

    strong {
      margin-left: 20px;
      color: #fff;
    }
  }
`;

export const Calendar = styled.aside`
  width: 450px;

  .DayPicker {
    background: #28262e;
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #48c9b0 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;

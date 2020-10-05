import styled from 'styled-components';
import background from '../../assets/img/background-login.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #000;

  form {
    margin: 80px 0;
    width: 450px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #fff;
    }

    a {
      color: #4169e1;
      display: block;
      margin-top: 18px;
      text-decoration: none;
      transition: color 0.2s;
    }

    > button {
      margin-top: 20px;
      width: 200px;
      border-radius: 4px;
      height: 40px;
      background-color: #f9d697;
      border: 0;
      font-weight: bold;

      :hover {
        background-color: #f9d697;
        opacity: 0.6;
        color: #333;
      }
    }
  }

  > a {
    color: #fff;
    display: block;
    margin-top: 18px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
  opacity: 0.4;
`;

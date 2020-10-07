import styled from 'styled-components';

export const Container = styled.div`
  .content {
    display: flex;
    flex-direction: row;

    form {
      width: 450px;
      text-align: center;
      background-color: #fff;
      padding: 40px;
      border-radius: 10px;

      h2 {
        margin-bottom: 24px;
        color: rgba(0, 0, 0, 0.85);
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
          color: rgba(0, 0, 0, 0.85);
        }
      }
    }

    > div {
      width: 400px;
      text-align: center;
      background-color: #fff;
      padding: 15px;
      border-radius: 10px;
      margin-left: 40px;
      height: 120px;
      color: rgba(0, 0, 0, 0.85);

      h2 {
        margin-bottom: 24px;
        color: rgba(0, 0, 0, 0.85);
      }
    }
  }
`;

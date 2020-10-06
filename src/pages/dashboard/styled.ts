import styled from 'styled-components';

export const Container = styled.div`
  .cards {
    & + div {
      margin-top: 20px;
    }
  }
`;

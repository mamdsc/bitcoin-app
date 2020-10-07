import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  border-radius: 10px;
  padding: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #333;
  color: #000;
  background-color: #fff;

  & + div {
    margin-top: 5px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #577c9e;
      border-color: #577c9e;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #577c9e;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
  }

  svg {
    margin-right: 16px;
  }
`;

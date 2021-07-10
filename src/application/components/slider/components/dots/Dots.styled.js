import styled, { css } from 'styled-components';

const activeStyles = css`
  background: red;
  cursor: auto;
  pointer-events: none;
`;

export const Root = styled.div`
  display: flex;
  justify-content: center;
  ${({ styles }) => styles};
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background: gray;
  cursor: pointer;
  ${({ active }) => active && activeStyles};
`;

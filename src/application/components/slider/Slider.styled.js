import styled, { css } from 'styled-components';

const buttonsStyles = css`
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  color: red;
  font-size: 20px;
`;

export const Root = styled.div`
  position: relative;
`;

export const Container = styled.div`
  overflow: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: ${({ gutter }) => `0 ${gutter}px`};
  width: ${({ width }) => width}px;
  min-width: ${({ width }) => width}px;
`;

export const LeftButton = styled.div`
  ${buttonsStyles};
  left: 0;
`;

export const RightButton = styled.div`
  ${buttonsStyles};
  right: 0;
`;

import styled, { css } from 'styled-components';

const containerButtonsStyles = css`
  position: absolute;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  padding: 8px;
  display: flex;
  align-items: center;
`;

const buttonsStyles = css`
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

export const LeftButtonContainer = styled.div`
  ${containerButtonsStyles};
  left: 0;
  display: ${({ hidden }) => hidden ? 'none' : 'flex'};
`;

export const RightButtonContainer = styled.div`
  ${containerButtonsStyles};
  right: 0;
  display: ${({ hidden }) => hidden ? 'none' : 'flex'};
`;

export const LeftButton = styled.div`
  ${buttonsStyles};
`;

export const RightButton = styled.div`
  ${buttonsStyles};
`;

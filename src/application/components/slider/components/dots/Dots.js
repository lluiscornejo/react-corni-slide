import { Root, Dot } from './Dots.styled';

const Dots = ({ items = 0, activeDot, onClick, styles }) => {
  const totalItems = [...Array(items).keys()];

  return (
    <Root styles={styles}>
      {totalItems.map((item, idx) => (
        <Dot key={idx} active={activeDot === idx} onClick={() => onClick(idx)} />
      ))}
    </Root>
  );
};

export default Dots;

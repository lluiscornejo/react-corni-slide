import { useRef, useEffect, useState } from 'react';
import { scrollLeft } from '@Application/utils/scroll-left';
import { formatNumber } from '@Application/utils/numbers';
import Dots from './components/dots';
import {
  Root,
  Container,
  List,
  ListItem,
  LeftButton,
  RightButton,
} from './Slider.styled';

const Slider = ({ config, data, component: Component }) => {
  const rootRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [fixedPosition, setFixedPosition] = useState(true);
  const [dots, setDots] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const {
    itemsToShow,
    gutter,
    nextVisibleItemWidth,
    itemsToSlide,
    showDots,
    dotsStyles,
    animationVelocity,
  } = config;
  useEffect(() => {
    if (showDots) {
      const dots = Math.ceil(data.length / itemsToShow);
      setDots(dots);
    }
  }, []);
  useEffect(() => {
    if (rootRef.current) {
      const rootWidth = rootRef.current.offsetWidth;
      const calculatedItemWidth = (rootWidth / (itemsToShow)) - (nextVisibleItemWidth / itemsToShow);
      setItemWidth(calculatedItemWidth);
      const calculatedScrollPosition = calculatedItemWidth * itemsToSlide;
      setScrollPosition(calculatedScrollPosition);
    }
  }, [rootRef.current]);

  const getCurrentIndex = () => {
    const { scrollLeft } = rootRef.current;
    const displacement = itemWidth * itemsToSlide;
    const currentIndex = Math.round(formatNumber(scrollLeft / displacement));
    setActiveDot(currentIndex);
    return currentIndex;
  };

  const getDisplacement = (direction, scrollPosition) => {
    const isRightDirection = direction === 'right';
    const extraIndex = isRightDirection ? 0 : itemsToSlide;
    const extraCurrentIndex = isRightDirection ? 1 : 0;
    const listItems = rootRef.current.children[0].children;
    const currentIndex = getCurrentIndex();
    if (fixedPosition) {
      return scrollPosition;
    }
    setFixedPosition(true);
    const index = ((currentIndex + extraCurrentIndex) * itemsToSlide) - extraIndex;
    if (data.length >= index && index >= 0) {
      const fixedDisplacement = listItems[((currentIndex + extraCurrentIndex) * itemsToSlide) - extraIndex].getBoundingClientRect().left;
      return isRightDirection ? fixedDisplacement : -fixedDisplacement;
    }
    return scrollPosition;
  };

  const handleLeftDirection = () => {
    const displacement = getDisplacement('left', scrollPosition);
    scrollLeft(rootRef.current, -displacement, animationVelocity);
  };

  const handleRightDirection = () => {
    const displacement = getDisplacement('right', scrollPosition);
    if (displacement === scrollPosition) setFixedPosition(false);
    scrollLeft(rootRef.current, displacement, animationVelocity);
  };

  const handleHorizontalScroll = (e) => {
    if (e.deltaX) {
      setFixedPosition(false);
      getCurrentIndex();
    }
  };

  const handleTouchScroll = () => {
    setFixedPosition(false);
    getCurrentIndex();
  };

  const handleClickedDot = (index) => {
    const listItems = rootRef.current.children[0].children;
    if (data.length >= index && index >= 0) {
      const displacement = listItems[index * itemsToSlide].getBoundingClientRect().left;
      scrollLeft(rootRef.current, displacement, animationVelocity);
      scrollLeft(rootRef.current, displacement, animationVelocity);
    }
  };

  return (
    <Root>
      <Container ref={rootRef} onWheel={handleHorizontalScroll} onTouchMove={handleTouchScroll} onScroll={getCurrentIndex}>
        <List>
          {data.map((item, idx) => (
            <ListItem key={idx} width={itemWidth} gutter={gutter}>
              <Component {...item} />
            </ListItem>
          ))}
        </List>
        <LeftButton onClick={handleLeftDirection}>&lt;</LeftButton>
        <RightButton onClick={handleRightDirection}>&gt;</RightButton>
      </Container>
      {showDots && <Dots styles={dotsStyles} items={dots} activeDot={activeDot} onClick={handleClickedDot} />}
    </Root>
  );
};

export default Slider;

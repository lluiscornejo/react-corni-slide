import { useRef, useEffect, useState } from 'react';
import { scrollLeft } from '@Application/utils/scroll-left';
import { formatNumber } from '@Application/utils/numbers';
import { useResize } from '@Application/hooks/use-resize';
import Dots from './components/dots';
import {
  Root,
  Container,
  List,
  ListItem,
  LeftButtonContainer,
  RightButtonContainer,
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
  const [sliderConfig, setSliderConfig] = useState(config);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hideArrows, setHideArrows] = useState(true);
  const {
    itemsToShow,
    gutter,
    nextVisibleItemWidth,
    itemsToSlide,
    showDots,
    dotsStyles,
    animationVelocity,
    showArrows = true,
    arrows,
  } = sliderConfig;
  const setResponsiveConfig = (responsiveData) => {
    const breakpoints = Object.keys(responsiveData).map((item) => Number(item));
    const windowWidth = window.innerWidth;
    const orderedResponsive = breakpoints.sort((a, b) => b - a);
    const currentBreakpoint = orderedResponsive.find((item) => Number(item) <= windowWidth);
    const responsiveConfig = responsiveData[currentBreakpoint];
    const { responsive, ...restConfig } = config;
    setSliderConfig({ ...restConfig, ...responsiveConfig });
  };
  useResize(() => {
    const { responsive } = config;
    if (responsive) setResponsiveConfig(responsive);
  }, [config.responsive]);
  useEffect(() => {
    const { responsive } = config;
    if (responsive) setResponsiveConfig(responsive);
    if (showDots) {
      const dots = Math.ceil(((data.length - (itemsToShow - 1)) / itemsToSlide));
      setDots(dots);
    }
  }, [itemsToShow, config.responsive]);
  useEffect(() => {
    if (rootRef.current) {
      const rootWidth = rootRef.current.offsetWidth;
      const calculatedItemWidth = (rootWidth / (itemsToShow)) - (nextVisibleItemWidth / itemsToShow);
      setItemWidth(calculatedItemWidth);
      const calculatedScrollPosition = calculatedItemWidth * itemsToSlide;
      setScrollPosition(calculatedScrollPosition);
    }
  }, [rootRef.current, sliderConfig]);

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
    if (data.length > index && index >= 0) {
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

  const handleScroll = () => {
    const { scrollLeft } = rootRef.current;
    const isScrollEnd = Math.ceil(scrollLeft) >= (itemWidth * data.length) - ((itemWidth * itemsToShow) + nextVisibleItemWidth);
    getCurrentIndex();
    if (isScrollEnd) setShowRightArrow(false);
    else setShowRightArrow(true);
    if (scrollLeft === 0) setShowLeftArrow(false);
    else setShowLeftArrow(true);
  };

  const handleClickedDot = (index) => {
    const listItems = rootRef.current.children[0].children;
    if (data.length >= index && index >= 0) {
      const displacement = listItems[index * itemsToSlide].getBoundingClientRect().left;
      scrollLeft(rootRef.current, displacement, animationVelocity);
      scrollLeft(rootRef.current, displacement, animationVelocity);
    }
  };

  const handleMouseEnter = () => {
    setHideArrows(false);
  };

  const handleMouseLeave = () => {
    setHideArrows(true);
  };

  return (
    <Root>
      <Container
        ref={rootRef}
        onWheel={handleHorizontalScroll}
        onTouchMove={handleTouchScroll}
        onScroll={handleScroll}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
      >
        <List>
          {data.map((item, idx) => (
            <ListItem key={idx} width={itemWidth} gutter={gutter}>
              <Component {...item} />
            </ListItem>
          ))}
        </List>
        {showArrows && (
          <>
            <LeftButtonContainer hidden={!showLeftArrow || hideArrows}>
              <LeftButton onClick={handleLeftDirection}>
                {arrows ? arrows.left : '&lt;'}
              </LeftButton>
            </LeftButtonContainer>
            <RightButtonContainer hidden={!showRightArrow || hideArrows}>
              <RightButton onClick={handleRightDirection}>
                {arrows ? arrows.right : '&gt;'}
              </RightButton>
            </RightButtonContainer>
          </>
        )}
      </Container>
      {showDots && <Dots styles={dotsStyles} items={dots} activeDot={activeDot} onClick={handleClickedDot} />}
    </Root>
  );
};

export default Slider;

Math.easeInOutQuad = function (currentTime, startValue, changeInValue, duration) {
  // eslint-disable-next-line no-param-reassign
  currentTime /= duration / 2;
  if (currentTime < 1) return (changeInValue / 2) * currentTime * currentTime + startValue;
  // eslint-disable-next-line no-param-reassign,no-plusplus
  currentTime--;
  return -(changeInValue / 2) * (currentTime * (currentTime - 2) - 1) + startValue;
};

export const scrollLeft = (element, change, duration) => {
  const start = element.scrollLeft;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    // eslint-disable-next-line no-param-reassign
    element.scrollLeft = Math.easeInOutQuad(currentTime, start, change, duration);
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};

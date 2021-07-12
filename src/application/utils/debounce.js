export const debounce = (callback, wait) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
      // eslint-disable-next-line testing-library/await-async-utils
    }, wait);
  };
};

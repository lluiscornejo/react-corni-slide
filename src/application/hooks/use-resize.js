import { useEffect } from 'react';
import { debounce } from '@Application/utils/debounce';

export const useResize = (callback, state = [], dbTime = 400) => {
  useEffect(() => {
    const resize = debounce(callback, dbTime);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, state);
};

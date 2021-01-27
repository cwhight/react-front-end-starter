import { useLayoutEffect, useState } from 'react';

function useWindowWidth() {
  const [size, setSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function useWindowHeight() {
  const [size, setSize] = useState(window.innerHeight);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerHeight);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export { useWindowHeight, useWindowWidth }

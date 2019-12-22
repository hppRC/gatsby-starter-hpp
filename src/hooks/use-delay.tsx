import { useEffect, useState } from 'react';

export const useDelay = (waitinigTime: number) => {
  const [waiting, setWaiting] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => setWaiting(false), waitinigTime);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return waiting;
};

export default useDelay;

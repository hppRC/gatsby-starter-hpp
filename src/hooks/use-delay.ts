import { useEffect, useState } from 'react';

export default (waitinigTime: number): boolean => {
  const [waiting, setWaiting] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => setWaiting(false), waitinigTime);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return waiting;
};

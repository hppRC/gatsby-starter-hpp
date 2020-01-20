import { useEffect, useState } from 'react';

export default (waitinigTime: number) => {
  const [waiting, setWaiting] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => setWaiting(false), waitinigTime);
    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return waiting;
};

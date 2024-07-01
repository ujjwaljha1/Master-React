import React, { useState, useRef } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;

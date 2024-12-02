// Clock.js
import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  // useEffect to update the time every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock">
      <h2>Current Time</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
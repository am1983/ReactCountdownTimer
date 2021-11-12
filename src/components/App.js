import React, { useEffect, useState } from 'react';

const App = () => {
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && seconds > 0) {
      const timeOut = setTimeout(() => setSeconds(seconds - 1), 1000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [seconds, isActive]);

  const onStartClick = () => {
    setIsActive(true);
  };

  const onStopClick = () => {
    setIsActive(false);
  };

  return (
    <div className="ui container">
      <div>{ seconds }</div>
      <button onClick={onStartClick}>Start Timer</button>
      <button onClick={onStopClick}>Stop Timer</button>
    </div>
  );
};

export default App;
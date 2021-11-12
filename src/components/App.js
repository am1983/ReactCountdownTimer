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
    } else {
      if (seconds === 0) {
        setIsActive(false);
      }
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
      <h1>{ seconds }</h1>
      <div className="ui form">
        <div class="ui right labeled input">
          <input type="text" placeholder="mysite.com" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
          <div class="ui label">
            Seconds
          </div>
        </div>
        <div class="ui divider"></div>
        <div className="field">
          <button className={`ui primary button ${ isActive ? 'disabled' : '' }`} onClick={onStartClick}>Start Timer</button>
          <button className={`ui red button ${ !isActive ? 'disabled' : '' }`} onClick={onStopClick}>Stop Timer</button>
        </div>
      </div>
    </div>
  );
};

export default App;
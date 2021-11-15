import React, { useEffect, useState } from 'react';

const App = () => {
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!seconds) {
      setIsActive(false);
      return;
    }

    if (isActive && seconds) {
      const interval = setInterval(() => setSeconds(seconds - 1), 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds, isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="ui container">
      <h1>{ seconds }</h1>
      <div className="ui form">
        <div class="ui right labeled input">
          <input type="number" disabled={ isActive ? 'disabled' : '' }  value={seconds} onChange={(e) => setSeconds(e.target.value)} />
          <div class="ui label">
            Seconds
          </div>
        </div>
        <div className="ui divider"></div>
        <div className='field'>
          <button className={'ui primary button'} onClick={toggleTimer}>
            {!isActive ? 'Start' : 'Stop'} Timer
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
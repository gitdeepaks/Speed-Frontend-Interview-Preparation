import { useState, useRef, useEffect } from 'react';
import { TimerDisplay } from './TimerDIsplay';
import { TimerControles } from './TimerControles';

const Timer = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem('time') || 0);
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem('time', time);
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      // clear the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // start timer
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  //reset timer

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
    localStorage.removeItem('time');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mt-10 p-6 bg-white rounded-lg shadow-lg text-center items-center">
        <TimerDisplay time={time} />
        <TimerControles
          isRunning={isRunning}
          onReset={resetTimer}
          onToggle={toggleTimer}
        />
      </div>
    </div>
  );
};

export default Timer;

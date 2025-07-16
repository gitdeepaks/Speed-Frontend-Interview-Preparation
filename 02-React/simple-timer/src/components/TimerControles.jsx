import { useEffect, useRef } from 'react';

export const TimerControles = ({ isRunning, onToggle, onReset }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  return (
    <div>
      <button
        ref={startButtonRef}
        onClick={onToggle}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 mr-3"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={onReset}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
      >
        Reset
      </button>
    </div>
  );
};

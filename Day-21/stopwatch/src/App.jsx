import { useEffect, useRef, useState } from 'react';
import "./App.css";

export default function App() {
  const [time, setTime] = useState(0); // milliseconds
  const [running, setRunning] = useState(false);
  const [visible, setVisible] = useState(true);

  const intervalRef = useRef(null);

  // Start / Resume timer
  const startTimer = () => {
    if (intervalRef.current) return;

    setRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 15);
    }, 15);
  };

  // Stop timer
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
  };

  // Reset timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    setRunning(false);
  };

  // Close stopwatch
  const closeTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setVisible(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Format time
  const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  const centiseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

  if (!visible) return null;

  return (
    <div className="container">
      <div className="stopwatch">
        <div className="header">
          <h2>Stopwatch</h2>
          <button className="close" onClick={closeTimer}>✕</button>
        </div>

        <div className="time">
          {minutes}:{seconds}:{centiseconds}
        </div>

        <div className="buttons">
          {!running && time === 0 && (
            <button className="primary" onClick={startTimer}>Start</button>
          )}

          {running && (
            <button className="danger" onClick={stopTimer}>Stop</button>
          )}

          {!running && time > 0 && (
            <>
              <button className="primary" onClick={startTimer}>Resume</button>
              <button className="secondary" onClick={resetTimer}>Reset</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}



import './Counter.css';
import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-10-23T10:00:00-06:00');

const getTimeRemaining = () => {
  const difference = Math.max(0, TARGET_DATE.getTime() - Date.now());

  return [
    Math.floor(difference / (1000 * 60 * 60 * 24)),
    Math.floor((difference / (1000 * 60 * 60)) % 24),
    Math.floor((difference / (1000 * 60)) % 60),
    Math.floor((difference / 1000) % 60),
  ];
};

const Counter = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="counter-container"> 
      <div className="counter-inner">
        <p style={{ color: "#D6A92D" }} className="counter-number">{String(timeRemaining[0]).padStart(2, '0')}</p>
        <p style={{ color: "white" }} className="counter-label">DÍA</p>
      </div>

      <div className="counter-inner">
        <p style={{ color: "#D6A92D" }} className="counter-number">{String(timeRemaining[1]).padStart(2, '0')}</p>
        <p style={{ color: "white" }} className="counter-label">HORA</p>
      </div>
      <div className="counter-inner">
        <p style={{ color: "#D6A92D" }} className="counter-number">{String(timeRemaining[2]).padStart(2, '0')}</p>
        <p style={{ color: "white" }} className="counter-label">MIN</p>
      </div>

      <div className="counter-inner">
        <p style={{ color: "#D6A92D" }} className="counter-number">{String(timeRemaining[3]).padStart(2, '0')}</p>
        <p style={{ color: "white" }} className="counter-label">SEG</p>
      </div>
    
    </div>
  );
};

export default Counter;

import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ICountdownTimer {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: FC<ICountdownTimer> = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const navigate = useNavigate();
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (over) return;

    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
      navigate('/end');
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p>{`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
    </div>
  );
};

export default CountdownTimer;

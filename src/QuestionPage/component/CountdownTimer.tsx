import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ICountdownTimer {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: FC<ICountdownTimer> = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const navigate = useNavigate();
  //   const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (/* paused ||  */ over) return;

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

  //   const reset = () => {
  //     setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
  //     setPaused(false);
  //     setOver(false);
  //   };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      {/* <p>{`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s
        .toString()
        .padStart(2, '0')}`}</p> */}
      <p>{`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
    </div>
  );
};

export default CountdownTimer;

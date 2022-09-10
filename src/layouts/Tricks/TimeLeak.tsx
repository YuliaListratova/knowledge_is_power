import React from 'react';
import style from './Tricks.module.scss';

const TimeLeak = () => {
  return (
    <div className={style.page_time_leak}>
      <h1 className={style.title_time_leak}>Пески времени</h1>
      <p className={style.text}>Время на ответы сократилось на 10 секунд</p>
    </div>
  );
};

export default TimeLeak;

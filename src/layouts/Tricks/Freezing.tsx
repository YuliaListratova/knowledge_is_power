import React from 'react';
import style from './Tricks.module.scss';

const Freezing = () => {
  return (
    <div className={style.page_freezing}>
      <h1 className={style.title_freezing}>Заморозка</h1>
      <p className={style.text}>Пробейся сквозь толщу льда чтобы увидить варианты ответов.</p>
    </div>
  );
};

export default Freezing;

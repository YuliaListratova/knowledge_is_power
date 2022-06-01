import React from 'react';
import style from './Game.module.scss';

const Game = () => {
  return (
    <div>
      <div>Вопрос?</div>
      <div>
        <button className={style.button_answer} type="button">
          Вариант
        </button>
        <button className={style.button_answer} type="button">
          Вариант
        </button>
        <button className={style.button_answer} type="button">
          Вариант
        </button>
        <button className={style.button_answer} type="button">
          Вариант
        </button>
      </div>
    </div>
  );
};

export default Game;

import React from 'react';
import Question from './component/Question';
import style from './Game.module.scss';

const Game = () => {
  const randomQuestion =
    'Здесь нужно написать свой вопрос. Здесь нужно написать свой вопрос.'; /* () => {} */

  return (
    <div className={style.content}>
      <div className={style.question}>
        <Question questionText={randomQuestion} />
      </div>
      <div className={style.all_answer}>
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

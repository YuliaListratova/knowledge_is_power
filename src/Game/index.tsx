import React from 'react';
import Answer from './component/Answer';
import Question from './component/Question';
import style from './Game.module.scss';

const Game = () => {
  const randomQuestion =
    'Здесь нужно написать свой вопрос. Здесь нужно написать свой вопрос.'; /* () => {} */
  const randomAnswer = 'Вариант ответа';

  return (
    <div className={style.content}>
      <div className={style.question}>
        <Question questionText={randomQuestion} />
      </div>
      <div className={style.all_answer}>
        <button className={style.button_answer} type="button">
          <Answer answerText={randomAnswer} />
        </button>
        <button className={style.button_answer} type="button">
          <Answer answerText={randomAnswer} />
        </button>
        <button className={style.button_answer} type="button">
          <Answer answerText={randomAnswer} />
        </button>
        <button className={style.button_answer} type="button">
          <Answer answerText={randomAnswer} />
        </button>
      </div>
    </div>
  );
};

export default Game;

import React, { FC } from 'react';
import style from '../Game.module.scss';
import { IUsersData } from '../../../store/pages/QuestionsPage/interfaces';

interface IAnswer {
  quest: IUsersData;
  answer: 0 | 1 | 2 | 3;
  onClick: (isTrueAnswer: boolean) => void;
}

const Answer: FC<IAnswer> = ({ quest, answer, onClick }) => {
  const handleOnClick = () => onClick(answer === 0);

  return (
    <button onClick={handleOnClick} className={style.button_answer} type="button">
      <div>{quest.answers[answer]}</div>
    </button>
  );
};

export default Answer;

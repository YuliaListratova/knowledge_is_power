import React, { FC } from 'react';
import { IUsersData } from '../../interface/IUsers';

interface IAnswer {
  quest: IUsersData;
  answer: 0 | 1 | 2 | 3;
  onClick: (isTrueAnswer: boolean) => void;
}

const Answer: FC<IAnswer> = ({ quest, answer, onClick }) => {
  const handleOnClick = () => onClick(answer === 0);

  return <div onClick={handleOnClick}>{quest.answers[answer]}</div>;
};

export default Answer;

import React, { FC } from 'react';
import { IUsersData } from '../../interface/IUsers';

interface IAnswer {
  quest: IUsersData;
  answer: 0 | 1 | 2 | 3;
}

const Answer: FC<IAnswer> = ({ quest, answer }) => {
  return <div>{quest.answers[answer]}</div>;
};

export default Answer;

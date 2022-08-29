import React, { FC } from 'react';
import { IUsersData } from '../../interface/IUsers';

interface IAnswer {
  quest: IUsersData;
}

const Answer: FC<IAnswer> = ({ quest }) => {
  return <div>{quest.answers[0]}</div>;
};

export default Answer;

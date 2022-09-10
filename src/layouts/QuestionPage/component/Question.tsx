import React, { FC } from 'react';
import { IUsersData } from '../../../store/pages/QuestionsPage/interfaces';
// import { IUsersData } from '../../../interface/IUsers';

interface IQuestion {
  quest: IUsersData;
}

const Question: FC<IQuestion> = ({ quest }) => {
  return <div>{quest.question}</div>;
};

export default Question;

import React, { FC } from 'react';
import { IUsersData } from '../../interface/IUsers';

interface IQuestion {
  quest: IUsersData;
}

const Question: FC<IQuestion> = ({ quest }) => {
  return (
    <div>
      <div>{quest ? <div>{quest.question}</div> : <div>У матросов нет вопросов</div>}</div>
    </div>
  );
};

export default Question;

import React, { FC } from 'react';

interface IAnswer {
  answerText: string;
}

const Answer: FC<IAnswer> = (props) => {
  const { answerText } = props;
  return <>{answerText}</>;
};

export default Answer;

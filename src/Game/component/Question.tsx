import React, { FC } from 'react';

interface IQuestion {
  questionText: string;
}

const Question: FC<IQuestion> = (props) => {
  const { questionText } = props;
  return <>{questionText}</>;
};

export default Question;

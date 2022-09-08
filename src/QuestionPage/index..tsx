import React, { useEffect, useState } from 'react';
import { usersUrl } from '../api/constats';
import Question from './component/Question';

import { IUsers, IUsersData } from '../interface/IUsers';
import Answer from './component/Answer';
import style from './Game.module.scss';
import CountdownTimer from './component/CountdownTimer';
import { useNavigate } from 'react-router-dom';
import Loading from './component/ClipLoader';
import { $api } from '../api/axios-instance';

const shuffle = (array: Array<0 | 1 | 2 | 3>): Array<0 | 1 | 2 | 3> => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const arrayTricks = ['/freezing', '/mix_letters', '/time-leak'];
const numberTricks = Math.floor(Math.random() * arrayTricks.length);
const myTrick = arrayTricks[numberTricks];

const QuestionPage = () => {
  const [usersData, setUsersData] = useState<IUsers | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const navigate = useNavigate();

  const getData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setUsersData(data);
  };

  useEffect(() => {
    setTimeout(() => {
      getData(usersUrl);
      // getData($api);
    }, 1000);
  }, []);

  const [answer1, answer2, answer3, answer4] = shuffle([0, 1, 2, 3]);

  const handleSelectAnswer = (isTrueAnswer: boolean): void => {
    if (isTrueAnswer) {
      setCurrentQuestion((lastQuestion) => lastQuestion + 1);
    } else {
      navigate(myTrick);
    }
  };

  const currentData = usersData?.data[currentQuestion] as IUsersData;

  return !usersData ? (
    <div className={style.loading}>
      <Loading />
    </div>
  ) : (
    <div className={style.content}>
      <div className={style.timer_question}>
        <div className={style.timer}>
          <CountdownTimer hours={0} minutes={0} seconds={5} />
        </div>

        <div className={style.question}>
          <Question quest={currentData} />
        </div>
      </div>
      <div className={style.all_answer}>
        <button className={style.button_answer} type="button">
          <Answer quest={currentData} answer={answer1} onClick={handleSelectAnswer} />
        </button>
        <button className={style.button_answer} type="button">
          <Answer quest={currentData} answer={answer2} onClick={handleSelectAnswer} />
        </button>
        <button className={style.button_answer} type="button">
          <Answer quest={currentData} answer={answer3} onClick={handleSelectAnswer} />
        </button>
        <button className={style.button_answer} type="button">
          <Answer quest={currentData} answer={answer4} onClick={handleSelectAnswer} />
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;

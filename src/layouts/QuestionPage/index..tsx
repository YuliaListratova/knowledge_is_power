import React, { useEffect, useState } from 'react';
import style from './Game.module.scss';
import CountdownTimer from './component/CountdownTimer';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './component/ClipLoader';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchQuestions } from '../../store/pages/TodosPage/async-actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import Question from './component/Question';
import Answer from './component/Answer';

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
  // const [usersData, setUsersData] = useState<IUsers | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchQuestions({ qType: 1, count: 5 }));
    if (!search) {
      navigate('/questions_page');
    }
  }, [dispatch, navigate, search]);

  const { isLoading, error, data } = useAppSelector((store) => store.questions);

  const [answer1, answer2, answer3, answer4] = shuffle([0, 1, 2, 3]);

  const handleSelectAnswer = (isTrueAnswer: boolean): void => {
    if (isTrueAnswer) {
      setCurrentQuestion((lastQuestion) => lastQuestion + 1);
    } else {
      navigate(myTrick);
    }
  };

  if (isLoading || !data?.data) {
    return (
      <div className={style.loading}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const questionCount = data.data.length - currentQuestion;

  console.log('questionCount', questionCount);

  const currentData = data.data[currentQuestion];
  console.log('currentData', currentData);

  if (questionCount === 0) {
    navigate('/win');
    return null;
  }

  return (
    <div className={style.content}>
      <div className={style.timer_question}>
        <div className={style.timer}>
          <CountdownTimer hours={0} minutes={1} seconds={0} />
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

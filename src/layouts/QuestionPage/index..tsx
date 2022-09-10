import React, { useEffect, useState } from 'react';
import style from './Game.module.scss';
import CountdownTimer from './component/CountdownTimer';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './component/ClipLoader';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchQuestions } from '../../store/pages/QuestionsPage/async-actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import Question from './component/Question';
import Answer from './component/Answer';
import ButtonStart from '../../ButtonStart/ButtonStart';
import { PrevioslyQuestionActionTypes } from '../../store/PrevioslyQuestion/interfaces';
import { Answers } from './component/Answers';
import MixLetters from '../Tricks/MixLetters';
import { QuestionCounterActionTypes } from '../../store/QuestionCounter/interfaces';
import { ShouldShuffleActionTypes } from '../../store/ShouldShuffle/interfaces';

const arrayTricks = ['/freezing', '/mix_letters', '/time-leak'];
const numberTricks = Math.floor(Math.random() * arrayTricks.length);
const myTrick = arrayTricks[numberTricks];

const QuestionPage = () => {
  // const [usersData, setUsersData] = useState<IUsers | null>(null);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isError, setIsError] = useState(false);

  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();

  const { isLoading, error, data } = useAppSelector((store) => store.questions);

  useEffect(() => {
    if (!data && !isLoading) {
      console.log('isLoading', isLoading);
      dispatch(fetchQuestions({ qType: 1, count: 5 }));
    }
    if (!search) {
      navigate('/questions_page');
    }
  }, [data, dispatch, isLoading, navigate, search]);

  const isPrevioslyQuestionFail = useAppSelector((store) => store.isPrevioslyQuestionFail);

  const currentQuestion = useAppSelector((store) => store.questionCounter);

  const shouldShuffle = useAppSelector((store) => store.shouldShuffle);

  const handleNewGameStart = () => {
    dispatch({ type: QuestionCounterActionTypes.START_NEW_GAME });
    navigate('/knowledge_is_power');
  };

  const handleSelectAnswer = (isTrueAnswer: boolean): void => {
    if (isTrueAnswer) {
      // setCurrentQuestion((lastQuestion) => lastQuestion + 1);
      dispatch({ type: QuestionCounterActionTypes.SET_NEXT_QUESTION });
      if (isPrevioslyQuestionFail) {
        navigate('/mix_letters');
      }
      if (shouldShuffle) {
        dispatch({ type: ShouldShuffleActionTypes.SET_IS_SHOULD_SHUFFLE_FALSE });
      }
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 1000);
      dispatch({ type: PrevioslyQuestionActionTypes.PREVIOSLY_QUESTION_FAIL });
      // navigate(myTrick);
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
    <>
      <div className={style.content}>
        <div className={style.timer_question}>
          <div className={style.timer}>
            <CountdownTimer hours={1} minutes={1} seconds={0} />
          </div>

          <div className={style.question}>
            <Question quest={currentData} />
          </div>
        </div>
        <Answers selectAnswer={handleSelectAnswer} currentData={currentData} />
        <div className={style.exit}>
          <ButtonStart btnText="Выход" handleClick={handleNewGameStart} />
        </div>
      </div>
      {isError && (
        // <div className={style.block_error_answer}>
        <h2 className={style.block_error_answer}>НЕПРАВИЛЬНЫЙ ОТВЕТ</h2>
        // </div>
      )}
    </>
  );
};

export default QuestionPage;

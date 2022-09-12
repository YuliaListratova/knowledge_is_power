import React, { useEffect, useState } from 'react';
import style from './Game.module.scss';
import CountdownTimer from './component/CountdownTimer';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './component/ClipLoader';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Question from './component/Question';
import ButtonStart from '../../ButtonStart/ButtonStart';
import { PrevioslyQuestionActionTypes } from '../../store/PrevioslyQuestion/interfaces';
import { Answers } from './component/Answers';
import { QuestionCounterActionTypes } from '../../store/QuestionCounter/interfaces';
import { ShouldShuffleActionTypes } from '../../store/ShouldShuffle/interfaces';
import { getShuffleLettersInAnswers } from '../../utils';
import { count } from '../../constants/constants';

const QuestionPage = () => {
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const navigate = useNavigate();

  const { isLoading, error, data } = useAppSelector((store) => store.questions);

  useEffect(() => {
    if (!search) {
      navigate('/questions_page');
    }
  }, [data, dispatch, isLoading, navigate, search]);

  const isPrevioslyQuestionFail = useAppSelector((store) => store.isPrevioslyQuestionFail);
  const currentQuestion = useAppSelector((store) => store.questionCounter);
  const shouldShuffle = useAppSelector((store) => store.shouldShuffle);
  const handleNewGameStart = () => {
    navigate('/knowledge_is_power');
  };

  const handleSelectAnswer = (isTrueAnswer: boolean): void => {
    if (isTrueAnswer) {
      dispatch({ type: QuestionCounterActionTypes.SET_NEXT_QUESTION });
      if (isPrevioslyQuestionFail && count !== currentQuestion + 1) {
        navigate('/mix_letters');
      }
      if (shouldShuffle) {
        dispatch({ type: ShouldShuffleActionTypes.SET_IS_SHOULD_SHUFFLE_FALSE });
      }
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 1000);
      dispatch({ type: PrevioslyQuestionActionTypes.PREVIOSLY_QUESTION_FAIL });
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
  const currentData = data.data[currentQuestion];
  const resultData = shouldShuffle ? getShuffleLettersInAnswers(currentData) : currentData;

  if (questionCount === 0) {
    navigate('/win');
    return null;
  }

  return (
    <>
      <div className={style.content}>
        <div className={style.timer_question}>
          <div className={style.timer}>
            <CountdownTimer hours={0} minutes={1} seconds={0} />
          </div>
          <div className={style.question}>
            <Question quest={resultData} />
          </div>
        </div>
        {isError && <h2 className={style.block_error_answer}>ПОПРОБУЙТЕ ЕЩЁ РАЗ</h2>}
        <Answers selectAnswer={handleSelectAnswer} currentData={resultData} />
        <div className={style.exit}>
          <ButtonStart btnText="Выход" handleClick={handleNewGameStart} />
        </div>
      </div>
    </>
  );
};

export default QuestionPage;

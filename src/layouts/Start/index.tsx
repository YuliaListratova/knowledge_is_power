import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ButtonStart from '../../ButtonStart/ButtonStart';
import style from './Start.module.scss';
import Level from '../Level';
import { PrevioslyQuestionActionTypes } from '../../store/PrevioslyQuestion/interfaces';
import { QuestionCounterActionTypes } from '../../store/QuestionCounter/interfaces';
import { ShouldShuffleActionTypes } from '../../store/ShouldShuffle/interfaces';

const Start = () => {
  const [isStartGame, setIsStartGame] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/knowledge_is_power');
    }
  }, [pathname, navigate]);

  useEffect(() => {
    dispatch({ type: QuestionCounterActionTypes.START_NEW_GAME });
    dispatch({ type: PrevioslyQuestionActionTypes.PREVIOSLY_QUESTION_TRUE });
    dispatch({ type: ShouldShuffleActionTypes.SET_IS_SHOULD_SHUFFLE_FALSE });
  }, [dispatch]);

  const handleGameStart = () => {
    setIsStartGame(true);
  };

  return !isStartGame ? (
    <div className={style.start_list}>
      <div className={style.content_list}>
        <div className={style.triangle_top}>
          <h1 className={style.title1}>ЗНАНИЕ</h1>
          <h1 className={style.title2}>СИЛА</h1>
        </div>
        <ButtonStart btnText="НАЧАТЬ" handleClick={handleGameStart} />
      </div>
    </div>
  ) : (
    <Level />
  );
};

export default Start;

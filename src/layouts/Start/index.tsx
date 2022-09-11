import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ButtonStart from '../../ButtonStart/ButtonStart';
import style from './Start.module.scss';
import Level from '../Level';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { PrevioslyQuestionActionTypes } from '../../store/PrevioslyQuestion/interfaces';
import { QuestionCounterActionTypes } from '../../store/QuestionCounter/interfaces';
import { ShouldShuffleActionTypes } from '../../store/ShouldShuffle/interfaces';

const Start = () => {
  const [isStartGame, setIsStartGame] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
        {/* <div className={style.specification}>
          Преодолейте путь до самой вершины и одержите победу в невероятно увлекательной викторине.
          Отвечайте на многообразные вопросы по разным темам, в то время как испытания на реакцию
          будут постоянно держать в напряжении. От игрока потребуется скорость и точность.
        </div> */}
        <ButtonStart btnText="НАЧАТЬ" handleClick={handleGameStart} />
      </div>
    </div>
  ) : (
    <Level />
  );
};

export default Start;

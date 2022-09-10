import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonStart from '../../ButtonStart/ButtonStart';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { QuestionCounterActionTypes } from '../../store/QuestionCounter/interfaces';

import style from './Win.module.scss';

const Win = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNewGameStart = () => {
    dispatch({ type: QuestionCounterActionTypes.START_NEW_GAME });
    navigate('/knowledge_is_power');
  };

  return (
    <div className={style.win}>
      <h1 className={style.title_win}>Win</h1>
      <ButtonStart btnText="НОВАЯ ИГРА" handleClick={handleNewGameStart} />
    </div>
  );
};

export default Win;

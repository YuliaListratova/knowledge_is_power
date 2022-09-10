import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { PrevioslyQuestionActionTypes } from '../../store/PrevioslyQuestion/interfaces';
import { ShouldShuffleActionTypes } from '../../store/ShouldShuffle/interfaces';
import style from './Tricks.module.scss';

const MixLetters = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  dispatch({ type: ShouldShuffleActionTypes.SET_IS_SHOULD_SHUFFLE_TRUE });
  dispatch({ type: PrevioslyQuestionActionTypes.PREVIOSLY_QUESTION_TRUE });
  useEffect(() => {
    setTimeout(() => navigate('/questions_page'), 2000);
  });
  return (
    <div className={style.page_mix_letters}>
      <h1 className={style.title_mix_letters}>Буквомешалка</h1>
      <p className={style.text}>Чтобы найти правильный ответ, верни буквы в исходное положение.</p>
    </div>
  );
};

export default MixLetters;

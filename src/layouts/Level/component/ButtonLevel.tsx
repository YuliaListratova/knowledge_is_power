import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { count } from '../../../constants/constants';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { fetchQuestions } from '../../../store/pages/QuestionsPage/async-actions';
import style from '../../Level/Level.module.scss';

interface ILevel {
  btnText: string;
  difficult: number;
}

const ButtonLevel: FC<ILevel> = ({ btnText, difficult }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(fetchQuestions({ qType: difficult, count }));
    navigate('/questions_page');
  };

  return (
    <button onClick={handleClick} className={style.button_level} type="button">
      <div>{btnText}</div>
    </button>
  );
};

export default ButtonLevel;

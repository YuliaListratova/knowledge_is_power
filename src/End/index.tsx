import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonStart from '../Start/component/ButtonStart';
import style from './End.module.scss';

const End = () => {
  const navigate = useNavigate();

  const handleNewGameStart = () => {
    navigate('/knowledge_is_power');
  };

  return (
    <div className={style.over}>
      <h1 className={style.title_over}>Game over</h1>
      <ButtonStart btnText="НОВАЯ ИГРА" handleClick={handleNewGameStart} />
    </div>
  );
};

export default End;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonStart from '../../Start/component/ButtonStart';

import style from './Win.module.scss';

const Win = () => {
  const navigate = useNavigate();

  const handleNewGameStart = () => {
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

import React from 'react';
import Button from '../Button/import';
import Game from '../Game/Game';
import style from './Start.module.scss';

const Start = () => {
  const handleGameStart = () => {
    return <Game />;
  };

  return (
    <div className={style.content_list}>
      <h1 className={style.title}>2048</h1>
      <Button btnText="Начать" handleClick={handleGameStart} />
    </div>
  );
};

export default Start;

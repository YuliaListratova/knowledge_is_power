import { useState } from 'react';
import Button from '../Button/import';
import Game from '../Game';
import style from './Start.module.scss';

const Start = () => {
  const [isStartGame, setIsStartGame] = useState(false);
  const handleGameStart = () => {
    console.log('Game');
    setIsStartGame(true);
  };

  return !isStartGame ? (
    <div className={style.content_list}>
      <h1 className={style.title}>Знание сила</h1>
      <div className={style.specification}>Описание игры</div>
      <Button btnText="Начать" handleClick={handleGameStart} />
    </div>
  ) : (
    <Game />
  );
};

export default Start;

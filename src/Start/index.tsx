import { useState } from 'react';
import QuestionPage from '../Game/index.';

import ButtonStart from './component/ButtonStart';
import style from './Start.module.scss';

const Start = () => {
  const [isStartGame, setIsStartGame] = useState(false);
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
    <QuestionPage />
  );
};

export default Start;

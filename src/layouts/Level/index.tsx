import React from 'react';
import ButtonLevel from './component/ButtonLevel';
import style from './Level.module.scss';

const Level = () => {
  return (
    <div className={style.page_level}>
      <h2 className={style.title_level}>Выберите уровень сложности</h2>
      <div className={style.button_block}>
        <ButtonLevel btnText="Детский" difficult={4} />
        <ButtonLevel btnText="Лёгкий" difficult={1} />
        <ButtonLevel btnText="Средний" difficult={2} />
        <ButtonLevel btnText="Сложный" difficult={3} />
      </div>
    </div>
  );
};

export default Level;

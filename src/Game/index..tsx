import React, { FC, useEffect, useState } from 'react';
import { usersUrl } from '../api/constats';
import Question from './component/Question';

import { IUsers } from '../interface/IUsers';
import Answer from './component/Answer';
import style from './Game.module.scss';

const QuestionPage = () => {
  const [usersData, setUsersData] = useState<IUsers | null>(null);

  const getData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setUsersData(data);
  };

  useEffect(() => {
    setTimeout(() => {
      getData(usersUrl);
    }, 1000);
  }, []);

  return !usersData ? (
    <div className={style.loading}>Загрузка...</div>
  ) : (
    <div className={style.content}>
      <div className={style.question}>
        <Question quest={usersData.data[0]} />
      </div>
      <div className={style.all_answer}>
        <button className={style.button_answer} type="button">
          <Answer quest={usersData.data[0]} answer={0} />
        </button>
        <button className={style.button_answer} type="button">
          <Answer quest={usersData.data[0]} answer={1} />
        </button>
        <button className={style.button_answer} type="button">
          <Answer quest={usersData.data[0]} answer={2} />
        </button>
        <button className={style.button_answer} type="button">
          <Answer quest={usersData.data[0]} answer={3} />
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;

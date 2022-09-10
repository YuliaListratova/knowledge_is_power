import React from 'react';
import style from './Tricks.module.scss';

const MixLetters = () => {
  return (
    <div className={style.page_mix_letters}>
      <h1 className={style.title_mix_letters}>Буквомешалка</h1>
      <p className={style.text}>Чтобы найти правильный ответ, верни буквы в исходное положение.</p>
    </div>
  );
};

export default MixLetters;

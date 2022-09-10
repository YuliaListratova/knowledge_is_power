import React, { FC } from 'react';
import style from './ButtonStart.module.scss';

interface IButtonStart {
  btnText: string;
  handleClick: () => void;
}

const ButtonStart: FC<IButtonStart> = (props) => {
  const { btnText, handleClick } = props;
  return (
    <button className={style.button_start} type="button" onClick={handleClick}>
      {btnText}
    </button>
  );
};

export default ButtonStart;

import React, { FC } from 'react';
import style from './Button.module.scss';

interface IButton {
  btnText: string;
  handleClick: () => void;
}

const Button: FC<IButton> = (props) => {
  const { btnText, handleClick } = props;
  return (
    <button className={style.button} type="button" onClick={handleClick}>
      {btnText}
    </button>
  );
};

export default Button;

import React from 'react';
import styleBtnMore from './ButtonMore.module.scss'

const ButtonMore  = () => {
  return (
    <>
     <button className={styleBtnMore.btnMore}>Показать еще 5 билетов!</button>
    </>
  );
};

export default ButtonMore
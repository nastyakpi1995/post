import React from 'react';
import style from './style.module.scss';

const Switch = () => {
  return (
    <div className={style.box_switch}>
      <label className={style.switch}>
        <input type="checkbox" />
        <span className={style.slider} />
      </label>
    </div>
  );
};

export default Switch;

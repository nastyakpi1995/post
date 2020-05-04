// import classNames from 'classnames';
import React from 'react';

// Components

// import Name from '../../';

// Style

import style from './style.scss';

// ----------------

// Type of props

// ----------------

export default function Input(props) {
  const {
    placeholder,
    // className,
    onChange,
    onFocus,
    onBlur,
    value,
    name,
    type,
    // ...rest
  } = props;

  // Modifiers

  // const inputFieldClass = classNames({
  //   [style.input__field]: true,
  //   'input__field--error': false,
  //   // [className]: className,
  // });

  // Render

  return (
    <div className={style.input}>
      <input
        placeholder={placeholder}
        // className={inputFieldClass}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
        // {...rest}
      />
    </div>
  );
}

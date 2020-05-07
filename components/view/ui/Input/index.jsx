import cn from 'classnames';
import types from 'prop-types';
import React from 'react';

// Style

import style from './style.module.scss';

// ----------------

export default function Input(props) {
  const {
    placeholder,
    className,
    onChange,
    onFocus,
    onBlur,
    value,
    name,
    type,
    ...rest
  } = props;

  // Modifiers

  // const inputFieldClass = cn({
  //   [style.input__field]: true,
  //   'input__field--error': false,
  //   [className]: className,
  // });

  // Render

  return (
    <input
      placeholder={placeholder}
      className={style.input}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      name={name}
      type={type}
      {...rest}
    />
  );
}

// Type of props

Input.propTypes = {
  placeholder: types.string,
  className: types.string,
  onChange: types.func,
  onFocus: types.func,
  onBlur: types.func,
  value: types.oneOfType([types.string, types.number]),
  name: types.string,
};

// Default value for props

Input.defaultProps = {
  className: '',
};

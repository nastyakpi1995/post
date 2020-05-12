import cn from 'classnames';
import types from 'prop-types';
import React from 'react';

// Style

import styles from './input.module.scss';

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

  const inputFieldClass = cn({
    [styles.input__field]: true,
    [styles['input__field--error']]: false,
    [className]: className,
  });

  // Render

  return (
    <div className={styles.input}>
      <input
        placeholder={placeholder}
        className={inputFieldClass}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
        {...rest}
      />
    </div>
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

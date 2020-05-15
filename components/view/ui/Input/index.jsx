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
    error,
    type,
    id,
    ...rest
  } = props;

  // Modifiers

  const inputFieldClass = cn({
    [styles.container__field]: true,
    [styles['container__field--error']]: error,
    [className]: className,
  });

  // Render

  return (
    <div className={styles.container}>
      <input
        placeholder={placeholder}
        className={inputFieldClass}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
        id={id}
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
  error: types.bool,
  type: types.string,
  id: types.string,
};

Input.defaultProps = {
  type: 'text',
};

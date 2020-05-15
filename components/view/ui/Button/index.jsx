import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Components

import Loader from '../Loader';
import Text from '../Text';

// Style

import styles from './button.module.scss';

export default function Button({
  uppercase,
  disabled,
  children,
  onClick,
  style,
  color,
  type,
  border,
  load,
  height,
  width,
  text = '',
  medium,
}) {
  // Modifiers

  const ButtonClass = classNames({
    [styles.button]: true,
    [styles[`button--color-${color}`]]: color,
    [styles['button--border']]: border,
    [styles['button--disabled']]: disabled,
    [styles['button--load']]: load,
    [styles[`button--height-${height}`]]: height,
    [styles[`button--width-${width}`]]: width,
  });

  // Render

  return (
    <button
      className={ButtonClass}
      disabled={disabled}
      onClick={load || disabled ? null : onClick}
      style={style}
      type={type}
    >
      {load ? (
        <Loader />
      ) : (
        <div className="button__content">
          <Text medium={medium} color="inherit" uppercase={uppercase}>
            {text || children}
          </Text>
        </div>
      )}
    </button>
  );
}

// Default value for props

Button.defaultProps = {
  children: 'Text',
  color: 'third',
  type: 'button',
  height: 'md',
  width: 'sm',
};

// Type of props

Button.propTypes = {
  uppercase: types.bool,
  children: types.oneOfType([types.string, types.number, types.node]),
  disabled: types.bool,
  onClick: types.func,
  style: types.object,
  border: types.bool,
  color: types.oneOf(['third', 'secondary', 'on-primary']),
  height: types.oneOf(['md', 'lg']),
  width: types.oneOf(['xs', 'sm', 'md', 'full']),
  load: types.bool,
  type: types.oneOf(['button', 'submit']),
};

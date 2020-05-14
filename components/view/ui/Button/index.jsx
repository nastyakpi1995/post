import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Components

import Loader from '../Loader';
import Text from '../Text';

// Style

import styles from './style.module.scss';

export default function Button({
  uppercase,
  disabled,
  text,
  onClick,
  className,
  color,
  type,
  border,
  load,
  height,
  width,
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
      className={className || ButtonClass}
      disabled={disabled}
      onClick={load || disabled ? null : onClick}
      type={type}
    >
      {load ? (
        <Loader />
      ) : (
        <div className="button__content">
          <Text color="inherit" uppercase={uppercase}>
            {text}
          </Text>
        </div>
      )}
    </button>
  );
}

// Default value for props

Button.defaultProps = {
  text: 'Text',
  color: 'third',
  type: 'button',
  height: 'md',
  width: 'sm',
};

// Type of props

Button.propTypes = {
  uppercase: types.bool,
  text: types.oneOfType([types.string, types.number, types.node]),
  disabled: types.bool,
  onClick: types.func,
  className: types.string,
  border: types.bool,
  color: types.oneOf(['third', 'secondary', 'on-primary']),
  height: types.oneOf(['md', 'big']),
  width: types.oneOf(['xs', 'sm', 'md']),
  load: types.bool,
  type: types.oneOf(['button', 'submit']),
};

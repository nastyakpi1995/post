import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Style

import style from './style.scss';

// ----------------

export default function Text({
  children,
  medium,
  color,
  size,
  bold,
  h,
  font,
  underline,
  className,
}) {
  return (
    <span
      className={classNames(
        {
          [style.text]: true,
          [style[`text--color-${color}`]]: color,
          [style[`text--size-${size}`]]: size,
          [style[`text--font-${font}`]]: font,
          [style['text--medium']]: medium,
          [style[`text--h${h}`]]: h,
          [style['text--bold']]: bold,
          [style['text--underline']]: underline,
        },
        className,
      )}
    >
      {children}
    </span>
  );
}

// Type of props

Text.propTypes = {
  children: types.oneOfType([types.string, types.number, types.node]),
  className: types.string,
  medium: types.bool,
  color: types.oneOf(['onPrimary', 'inherit']),
  size: types.oneOf([
    'extra-small',
    'small',
    'default',
    'middle',
    'big',
    'extra-big',
    'inherit',
  ]),
  bold: types.bool,
  h: types.oneOf(['1', '2', '3']),
  underline: types.bool,
};

// Default value for props

Text.defaultProps = {
  children: 'Your text',
  color: 'onPrimary',
  size: 'default',
};

import React from 'react';
import types from 'prop-types';

import cx from 'classnames';

// Styles

import styles from './style.module.scss';

export default function ReactIcon({
  className,
  children,
  pointer,
  onClick,
  rotate,
  color,
  size,
}) {
  const ReactIconClass = cx(
    {
      [styles['react-icon']]: true,
      [styles[`react-icon--rotate-${rotate}`]]: rotate,
      [styles[`react-icon--color-${color}`]]: color,
      [styles[`react-icon--size-${size}`]]: size,
      [styles['react-icon--pointer']]: pointer,
    },
    className,
  );

  return (
    <div className={ReactIconClass} onClick={onClick}>
      {children}
    </div>
  );
}

// Type of props

ReactIcon.propTypes = {
  onClick: types.func,
  children: types.node,
  pointer: types.bool,
  rotate: types.oneOf(['90', '180', '270', '360']),
  size: types.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  color: types.oneOf(['primary', 'third']),
  className: types.string,
};

// Default value for props

ReactIcon.defaultProps = {
  children: 'Your text',
  color: 'primary',
  size: 'xs',
};

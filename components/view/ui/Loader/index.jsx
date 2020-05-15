import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Style

import styles from './style.module.scss';

export default function Loader(props) {
  const { style, color, size } = props;

  // Modifiers

  const LoaderClass = classNames({
    [styles.loader]: true,
    [styles[`loader--color-${color}`]]: color,
    [styles[`loader--size-${size}`]]: size,
  });
  // Render

  return <div className={LoaderClass} style={style} />;
}

// Type of props

Loader.propTypes = {
  style: types.object,
  color: types.oneOf(['light', 'dark']),
  size: types.oneOf(['xs', 'sm', 'md', 'lg']),
};

// Default value for props

Loader.defaultProps = {
  color: 'light',
  size: 'xs',
};

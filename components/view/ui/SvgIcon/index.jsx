import { ReactSVG } from 'react-svg';
import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Style

import styles from './style.module.scss';

export default function SvgIcon(props) {
  const {
    title,
    pointer,
    onClick,
    rotate,
    color,
    size,
    src,
    top,
    className,
  } = props;

  // Modifiers

  const SvgIconClass = classNames(
    {
      [styles['svg-icon']]: true,
      [styles[`svg-icon--rotate-${rotate}`]]: rotate,
      [styles[`svg-icon--color-${color}`]]: color,
      [styles[`svg-icon--size-${size}`]]: size,
      [styles['svg-icon--pointer']]: pointer,
    },
    className,
  );

  // Render

  return <ReactSVG src={src} className={SvgIconClass} onClick={onClick} />;
}

// Type of props

SvgIcon.propTypes = {
  pointer: types.bool,
  onClick: types.func,
  className: types.string,
  rotate: types.oneOf(['90', '180', '270', '360']),
  color: types.oneOf(['primary']),
  size: types.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  src: types.string.isRequired,
};

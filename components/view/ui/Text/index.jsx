import cn from 'classnames';
import types from 'prop-types';
import React from 'react';

// Style

import styles from './style.module.scss';

// ----------------

export default function Text({
  children,
  medium,
  color,
  size,
  bold,
  h,
  tagName,
  font,
  underline,
  className,
  uppercase,
  spacing,
  semibold,
  lineHeight,
}) {
  const Tag = tagName || 'p';

  return (
    <Tag
      className={cn(
        {
          [styles.text]: true,
          [styles[`text--color-${color}`]]: color,
          [styles[`text--size-${size}`]]: size,
          [styles[`text--font-${font}`]]: font,
          [styles['text--medium']]: medium,
          [styles['text--bold']]: bold,
          [styles['text--semibold']]: semibold,
          [styles['text--spacing']]: spacing,
          [styles['text--underline']]: underline,
          [styles['text--uppercase']]: uppercase,
          [styles[`text--line-height-${lineHeight}`]]: lineHeight,
        },
        className,
      )}
    >
      {children}
    </Tag>
  );
}

// Type of props

Text.propTypes = {
  children: types.oneOfType([types.string, types.number, types.node]),
  className: types.string,
  medium: types.bool,
  color: types.oneOf([
    'onPrimary',
    'onPrimaryLight-2',
    'inherit',
    'third',
    'primary',
  ]),
  size: types.oneOf(['xs', 'sm', 'default', 'md', 'xl', 'xxl', 'h2']),
  bold: types.bool,
  underline: types.bool,
  uppercase: types.bool,
  lineHeight: types.string,
};

// Default value for props

Text.defaultProps = {
  children: 'Your text',
  color: 'onPrimary',
  size: 'default',
};

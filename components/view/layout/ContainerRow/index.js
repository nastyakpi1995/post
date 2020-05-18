import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import styles from './style.module.scss';

export default function ContainerRow(props) {
  const { children, size } = props;
  // Modifiers

  const ContainerRowClass = classNames({
    [styles['container-row']]: true,
    [styles[`container-row--size-${size}`]]: size,
  });
  return <div className={ContainerRowClass}>{children}</div>;
}

// Type of props

ContainerRow.propTypes = {
  size: types.oneOfType(['md', 'sm', 'xs', 'xl']),
};

// Default value for props

ContainerRow.defaultProps = {
  size: 'sm',
};

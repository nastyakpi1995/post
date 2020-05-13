import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

import styles from './style.module.scss';

export default function AuthContainer({ children, className }) {
  // Modifiers

  const AuthTemplateClass = classNames({
    [styles['auth-container']]: true,
    [className]: className,
  });

  return <div className={AuthTemplateClass}>{children}</div>;
}

// Type of props

AuthContainer.propTypes = {
  children: types.node.isRequired,
};

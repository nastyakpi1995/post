import React from 'react';
import cn from 'classnames';

// Components

import { MdWarning } from 'react-icons/md';
import Text from '../Text';

// Styles

import styles from './style.module.scss';

// Icons

import ReactIcon from '../ReactIcon';

export default function ErrorMessage({ text, type, icon }) {
  // Modifiers

  const inputFieldClass = cn({
    [styles['error-message']]: true,
    [styles[`error-message--${type}`]]: type,
  });

  return (
    <div className={inputFieldClass}>
      <div className={styles['error-message__icon']}>
        <ReactIcon size="lg" color="secondary">
          <MdWarning />
        </ReactIcon>
      </div>
      <Text size="sm" color="inherit">
        {text}
      </Text>
    </div>
  );
}

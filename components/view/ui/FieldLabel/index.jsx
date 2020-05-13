import React from 'react';
import cn from 'classnames';
import types from 'prop-types';

// Components

import Text from '../Text';

// Styles

import styles from './style.module.scss';

export default function FieldLabel({ text, children, className, error }) {
  return (
    <div className={styles.fieldLabel}>
      <div className={styles.fieldLabel__title}>
        <Text uppercase medium tagName="p" size="xs" color="onPrimaryLight-2">
          {text}
        </Text>
      </div>
      {children}
      {error && <div className={styles.fieldLabel__error}>{error}</div>}
    </div>
  );
}

FieldLabel.propTypes = {
  text: types.string,
  className: types.string,
  children: types.any,
};

FieldLabel.defaultProps = {
  className: '',
  text: '',
  children: null,
};

import types from 'prop-types';
import React from 'react';
// Components

import Text from '../Text';
import Checkbox from '../Checkbox';

// Styles

import styles from './style.module.scss';

export default function CheckboxText({ text, onClick, checked }) {
  return (
    <div className={styles['checkbox-text']}>
      <Checkbox checked={checked} onClick={onClick} />
      <p className={styles['checkbox-text__text']}>
        <Text tagName="span">{text}</Text>
      </p>
    </div>
  );
}

CheckboxText.propTypes = {
  text: types.string.isRequired,
};

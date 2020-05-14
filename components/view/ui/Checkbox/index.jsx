import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

import ReactIcon from '../ReactIcon';

// Style

import styles from './style.module.scss';

export default function Checkbox({ onClick, checked, color, name, onChange }) {
  // Modifiers

  const CheckBoxClass = classNames({
    [styles.checkbox]: true,
    [styles['checkbox--checked']]: checked,
  });

  // Render

  return (
    <div className={CheckBoxClass} onClick={onClick || (() => {})}>
      {onChange && name && (
        <input
          name={name}
          type="checkbox"
          onChange={onChange}
          className={styles['checkbox__hidden-input']}
          checked={checked}
        />
      )}
      <div className={styles.checkbox__icon}>
        <ReactIcon size="sm" color="third">
          <FaCheck />
        </ReactIcon>
      </div>
    </div>
  );
}

// Type of props

Checkbox.propTypes = {
  onClick: types.func,
  onChange: types.func,
  checked: types.bool,
  name: types.string,
  color: types.oneOf(['valid', 'secondary']),
};

// Default value for props

Checkbox.defaultProps = {
  color: 'valid',
};

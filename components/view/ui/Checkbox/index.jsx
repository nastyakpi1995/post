import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Style

import styles from './checkbox.module.scss';

export default function CheckBox({ onClick, checked, color }) {
  // Modifiers

  const CheckBoxClass = classNames({
    [styles.checkbox]: true,
    [styles[`checkbox--color-${color}`]]: color,
    [styles['checkbox--checked']]: checked,
  });

  // Render

  return (
    <button className={CheckBoxClass} onClick={onClick}>
      <div className="checkbox__icon">
        {/* <SvgIcon color="primary" size="sm" src={ICONS.check} /> */}
      </div>
    </button>
  );
}

// Type of props

CheckBox.propTypes = {
  onClick: types.func.isRequired,
  checked: types.bool,
  color: types.oneOf(['valid', 'secondary']),
};

// Default value for props

CheckBox.defaultProps = {
  color: 'valid',
};

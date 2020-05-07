import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const Select = ({ options, value, name, onHandleChange, onHandleBlur }) => (
  <select
    value={value}
    name={name}
    className={styles['validation-number__code']}
    onChange={onHandleChange}
    onBlur={onHandleBlur}
  >
    {options.length > 0 &&
      options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
  </select>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  onHandleChange: PropTypes.func,
  onHandleBlur: PropTypes.func,
  value: PropTypes.string,
};

export default Select;
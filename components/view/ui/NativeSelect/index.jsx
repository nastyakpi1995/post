import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const Select = ({
  options,
  value,
  name,
  onHandleChange,
  onHandleBlur,
  onHandleClick,
  ...props
}) => (
  <select
    value={value}
    name={name}
    className={styles.select}
    onChange={onHandleChange}
    onBlur={onHandleBlur}
    {...props}
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
  options: PropTypes.arrayOf(
    PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  ),
  name: PropTypes.string,
  onHandleChange: PropTypes.func,
  onHandleClick: PropTypes.func,
  onHandleBlur: PropTypes.func,
  value: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
};

export default Select;

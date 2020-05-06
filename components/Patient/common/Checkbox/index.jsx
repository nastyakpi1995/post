import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const Checkbox = ({ name, onHandleChange, value }) => (
  <input
    type="checkbox"
    name={name}
    checked={value}
    className={styles.checkbox}
    onChange={onHandleChange}
  />
);

Checkbox.propTypes = {
  name: PropTypes.string,
  onHandleChange: PropTypes.func,
  value: PropTypes.string,
};

export default Checkbox;

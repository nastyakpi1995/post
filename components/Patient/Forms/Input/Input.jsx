import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const Input = ({ type, placeholder, id }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      id={id}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

export default Input;

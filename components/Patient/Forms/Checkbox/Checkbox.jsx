import React from 'react';
import PropTypes from 'prop-types';
import styles from './checkbox.module.scss';

const Checkbox = ({ id }) => {
  return <input type="checkbox" id={id} className={styles.checkbox} />;
};

Checkbox.propTypes = {
  id: PropTypes.string,
};

export default Checkbox;

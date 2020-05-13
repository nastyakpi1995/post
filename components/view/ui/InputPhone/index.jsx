import PhoneInput from 'react-phone-input-2';
import types from 'prop-types';
import React from 'react';

import styles from './input-phone.module.scss';

export default function InputPhone({ value, onChange, country }) {
  return (
    <div className={styles.container}>
      <PhoneInput
        inputClass="input-phone__input"
        containerClass="input-phone__container"
        onChange={onChange}
        country={country}
        value={value}
      />
    </div>
  );
}

// Type of props

InputPhone.propTypes = {
  value: types.string.isRequired,
  onChange: types.func.isRequired,
  country: types.string,
};

// Default value for props

InputPhone.defaultProps = {
  country: 'be',
};

import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input/input';

import labels from 'react-phone-number-input/locale/en.json';

// import en from 'react-phone-number-input/locale/en.json';
import styles from './input-number.module.scss';

export default function InputNumber(props) {
  const [value, setCountry] = useState();
  // console.log('getCountries()', getCountries());
  // console.log('value', getCountryCallingCode(value));
  return (
    <div className={styles.inputNumber}>
      {/* <select
        value={value}
        onChange={(event) => setCountry(event.target.value || undefined)}
      >
        <option value="">{en['ZZ']}</option>
        {getCountries().map((country) => (
          <option key={country} value={country}>
            {en[country]} +{getCountryCallingCode(country)}
          </option>
        ))}
      </select> */}
    </div>
  );
}

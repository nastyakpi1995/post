import React from 'react';
import Input from '../../../../Forms/Input/Input';
import styles from './personal.module.scss';

const Personal = () => {
  return (
    <div className={styles['validation-personal']}>
      <p className={styles['validation-description']}>Personal information</p>
      <div className={styles['personal-wrapper']}>
        <div className={styles['personal-date']}>
          <label className={styles.helper}>
            date of birth
            <Input type="date" placeholder="2017-06-01" id="date" />
          </label>
        </div>
        <div className={styles['personal-gender']}>
          <label className={styles.helper}>
            gender
            <select className={styles.select} id="gender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Personal;

import React from 'react';
import Input from '../../../../../view/ui/Input';
import styles from './style.module.scss';

export default function General() {
  return (
    <div className={styles['validation-general']}>
      <p className={styles['validation-description']}>General information</p>
      <div className={styles['general-name']}>
        <label className={styles.helper}>
          first name
          <Input type="text" placeholder="Frederick" id="firstName" />
        </label>
      </div>
      <div className={styles['general-surname']}>
        <label className={styles.helper}>
          last name
          <Input type="text" placeholder="Valdez" id="lastName" />
        </label>
      </div>
      <div className={styles['general-id']}>
        <label className={styles.helper}>
          national id
          <Input type="number" placeholder="0123456789" id="nationalId" />
        </label>
      </div>
    </div>
  );
}

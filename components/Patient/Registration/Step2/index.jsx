import React from 'react';
import Header from '../Header';
import Button from '../../Forms/Button';
import General from './components/General';
import Personal from './components/Personal';
import Contact from './components/Contact';
import styles from './style.module.scss';

export default function Step2() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.validation}>
          <h1 className={styles['validation-title']}>Complete Your Profile</h1>
          <General />
          <Personal />
          <Contact />
          <div className={styles['validation-button']}>
            <Button
              id="date"
              className={styles['validation-button__saveProfile']}
              text="save profile data"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

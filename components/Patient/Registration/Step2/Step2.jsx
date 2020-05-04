import React from 'react';
import Button from '../../Forms/Button';
import Header from '../Header/Header';
import General from './components/General/General';
import Personal from './components/Personal/Personal';
import Contact from './components/Contact/Contact';
import styles from './step2.module.scss';

const Step2 = () => {
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
};

export default Step2;

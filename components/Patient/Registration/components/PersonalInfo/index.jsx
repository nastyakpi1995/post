import React from 'react';
import { Header } from '../../common';
import { Button } from '../../../common';
import { General, Contact, Personal } from './components';
import styles from './style.module.scss';

const PersonalInfo = ({ onHandleChangePage }) => {
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
              onHandleClick={onHandleChangePage}
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

export default PersonalInfo;

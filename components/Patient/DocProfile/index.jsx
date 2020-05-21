import React from 'react';
import Header from '../../view/objects/AuthHeader/index';
import { Button } from '../../view/ui/index';
import Card from './Card/index';
import ArrowBack from '../../assets/icons/ArrowBack';
import AboutDoctor from './AboutDoctor';
import Location from './Location';
import styles from './style.module.scss';

export default function DocProfile() {
  return (
    <div className={styles['doc-profile']}>
      <Header />
      <div className={styles['doc-profile-body']}>
        <div className={styles['doc-profile-information']}>
          <Button
            className={styles['doc-profile-back']}
            text="back to search"
            Icon={ArrowBack}
          />
          <Card />
          <AboutDoctor />
        </div>
        <Location />
      </div>
    </div>
  );
}

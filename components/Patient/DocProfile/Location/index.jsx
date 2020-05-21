import React from 'react';
import LocationBlockButtons from './LocationButtons';
import Address from './Address/index';
import Book from './Book';
import styles from './styles.module.scss';

export default function Location() {
  return (
    <div className={styles.location}>
      <h1 className={styles['location-title']}>Location</h1>
      <LocationBlockButtons />

      <div className={styles['location-address']}>
        <Address className={styles['']} />
        <Book />
      </div>
    </div>
  );
}

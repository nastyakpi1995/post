import React from 'react';
import Button from '../../Forms/Button';
import styles from './style.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles['header-logo']}>
        <a
          className={`
                ${styles.link} 
                ${styles.logo__value}
             `}
          id="mainPage"
          href="#"
        >
          <span className={styles.doc}>Doc</span>
          <span className={styles.woo}>Woo</span>
        </a>
      </div>
      <div className={styles['header-buttons']}>
        <Button
          id="doctorLogin"
          className={styles['header-button__login']}
          text="login as doctor"
        />
        <select className={styles['header-button__language']} id="language">
          <option>en</option>
          <option>ua</option>
        </select>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './header.module.scss';

const Header = () => {
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
        <button
          className={styles['header-button__login']}
          id="doctorLogin"
          type="button"
        >
          login as doctor
        </button>
        <select className={styles['header-button__language']} id="language">
          <option>en</option>
          <option>ua</option>
        </select>
      </div>
    </div>
  );
};

export default Header;

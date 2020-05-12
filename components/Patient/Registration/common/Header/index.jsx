import React from 'react';
import cn from 'classnames';
import Button from '../../../../view/ui/Button';
import styles from './style.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles['header-logo']}>
      <a className={cn(styles.link, styles.logo__value)} href="#">
        <span className={styles.doc}>Doc</span>
        <span className={styles.woo}>Woo</span>
      </a>
    </div>
    <div className={styles['header-buttons']}>
      <Button
        className={styles['header-button__login']}
        text="login as doctor"
      />
      <select className={styles['header-button__language']}>
        <option>en</option>
        <option>ua</option>
      </select>
    </div>
  </div>
);

export default Header;

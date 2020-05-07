import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

const TermsOfUse = () => (
  <p className={styles.checkbox__title}>
    I have read and accept DocWho{' '}
    <span>
      <a href="#" className={cn(styles.link, styles.terms)}>
        Terms of Use
      </a>
    </span>{' '}
    and{' '}
    <span>
      <a href="#" className={cn(styles.link, styles.policy)}>
        Privacy Policy
      </a>
    </span>
    .
  </p>
);

export default TermsOfUse;

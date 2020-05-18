import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

import HeaderAuth from '../../objects/AuthHeader';

// Components

import AuthContainer from '../../layout/AuthContainer';

import styles from './authTemplate.module.scss';

export default function AuthTemplate({ children, aside }) {
  return (
    <div className={styles['auth-template']}>
      <div style={{ height: '60px', backgroundColor: '#252f4d' }}>
        <HeaderAuth />
      </div>

      <div className={styles['auth-template__body']}>
        <AuthContainer>
          <div className={styles['auth-template__container']}>
            <div className={styles['auth-template__content']}>{children}</div>
            <div className={styles['auth-template__aside']}>{aside}</div>
          </div>
        </AuthContainer>
      </div>
    </div>
  );
}

// Type of props

AuthTemplate.propTypes = {
  children: types.node.isRequired,
};

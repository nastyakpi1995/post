import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Components

import AuthContainer from '../../layout/AuthContainer';

import styles from './style.module.scss';

export default function AuthTemplate({ children }) {
  return (
    <div className={styles['auth-template']}>
      <div style={{ height: '60px', backgroundColor: '#252f4d' }}>Header</div>
      <div className={styles['auth-template__body']}>
        <AuthContainer>
          <div className={styles['auth-template__container']}>
            <div className={styles['auth-template__content']}>{children}</div>
            <div className={styles['auth-template__aside']}>Aside</div>
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

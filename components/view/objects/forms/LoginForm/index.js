import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Components

import Text from '../../../ui/Text';

import styles from './style.module.scss';

export default function LoginForm(props) {
  return (
    <div className={styles['login-form']}>
      <p className={styles['login-form__title']}>
        <Text semibold size="h2" tagName="span">
          Log in with phone number
        </Text>
      </p>
      {/* <InputPhone /> */}
    </div>
  );
}

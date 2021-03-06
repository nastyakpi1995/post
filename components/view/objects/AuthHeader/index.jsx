import React from 'react';
import cn from 'classnames';
import { i18n, withTranslation } from 'i18n';
import Router from 'next/router';

import { Button, NativeSelect } from '../../ui';
import styles from './style.module.scss';

const Header = ({ t, type }) => {
  return (
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
          text={type === 'DOC' ? t('loginAsPatient') : t('loginAsDoctor')}
          onClick={() =>
            Router.push({
              pathname: type === 'DOC' ? '/auth/login' : '/auth/doctor',
            })
          }
        />
        {i18n.languages && (
          <NativeSelect
            onHandleChange={(event) => {
              i18n.changeLanguage(event.target.value);
              return event.target.value;
            }}
            options={i18n.languages}
            value={i18n.language}
            className={styles['header-button__language']}
          />
        )}
      </div>
    </div>
  );
};

export default withTranslation('header')(Header);

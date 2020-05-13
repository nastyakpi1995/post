import React from 'react';
import cn from 'classnames';
import { withTranslation } from 'i18n';
import styles from './style.module.scss';

export function TermsOfUse({ t }) {
  return (
    <p className={styles.checkbox__title}>
      {`${t('generalInfo.privacyPolicy.iHaveRead')} `}
      <span>
        <a href="#" className={cn(styles.link, styles.terms)}>
          {`${t('generalInfo.privacyPolicy.terms')} `}
        </a>
      </span>
      {`${t('generalInfo.privacyPolicy.and')} `}
      <span>
        <a href="#" className={cn(styles.link, styles.policy)}>
          {t('generalInfo.privacyPolicy.privacyPolicy')}
        </a>
      </span>
      .
    </p>
  );
}

export default withTranslation('registration')(TermsOfUse);

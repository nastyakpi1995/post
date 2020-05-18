import React from 'react';
import { i18n, withTranslation } from 'i18n';

import styles from './style.module.scss';

// Components

import Button from '../../../ui/Button';
import ContainerRow from '../../../layout/ContainerRow';
import Text from '../../../ui/Text';

function HelpBlock({ t }) {
  return (
    <div className={styles['help-block']}>
      <Text color="primary" lineHeight="sm">
        {t('loginHelpText')} service@docwho.com
      </Text>
    </div>
  );
}

export default withTranslation('login')(HelpBlock);

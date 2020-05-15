import React from 'react';
import { i18n, withTranslation } from 'i18n';
import types from 'prop-types';

// Components

import HelpBlock from '../HelpBlock';

import styles from './style.module.scss';

// Components

import Button from '../../../ui/Button';
import ContainerRow from '../../../layout/ContainerRow';
import Text from '../../../ui/Text';

function Aside({ t, type }) {
  return (
    <div className={styles['auth-aside']}>
      <ContainerRow size="xs">
        <Text lineHeight="md" size="h2" semibold color="primary" tagName="h2">
          {t('loginAsideTitle')}{' '}
          {type === 'DOC' ? t('loginDoctor') : t('loginPatient')}
        </Text>
      </ContainerRow>
      <ContainerRow size="lg">
        <Text color="primary" size="md" lineHeight="sm">
          {t('loginAsideDesc')}
        </Text>
      </ContainerRow>
      <Button height="lg" width="md" medium color="on-primary">
        {t('loginAsideButton')}
      </Button>
      <HelpBlock />
    </div>
  );
}

Aside.propTypes = {
  type: types.string.isRequired,
};

export default withTranslation('login')(Aside);

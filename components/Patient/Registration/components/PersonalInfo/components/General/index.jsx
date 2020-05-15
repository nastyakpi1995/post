import React from 'react';
import types from 'prop-types';
import { withTranslation } from 'i18n';
import { Input, FieldLabel } from '../../../../../../view/ui';
import styles from './style.module.scss';

function General({ values, errors, touched, handleChange, handleBlur, t }) {
  return (
    <div className={styles['validation-general']}>
      <p className={styles['validation-description']}>
        {t('personalInfo.general.title')}
      </p>
      <div className={styles['general-name']}>
        <FieldLabel text={t('personalInfo.general.firstName')}>
          <Input
            type="text"
            placeholder="Frederick"
            name="firstName"
            value={values.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
        </FieldLabel>
      </div>
      <div className={styles['general-surname']}>
        <FieldLabel text={t('personalInfo.general.lastName')}>
          <Input
            type="text"
            placeholder="Valdez"
            name="lastName"
            value={values.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
        </FieldLabel>
      </div>
      <div className={styles['general-id']}>
        <FieldLabel text={t('personalInfo.general.nationalId')}>
          <Input
            type="number"
            placeholder="0123456789"
            name="nationalId"
            value={values.nationalId}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.nationalId && touched.nationalId ? (
            <div>{errors.nationalId}</div>
          ) : null}
        </FieldLabel>
      </div>
    </div>
  );
}

General.propTypes = {
  values: types.shape({
    firstName: types.string,
    lastName: types.string,
    nationalId: types.oneOfType([types.string, types.number]),
  }),
  errors: types.shape({
    firstName: types.string,
    lastName: types.string,
    nationalId: types.string,
  }),
  touched: types.shape({
    firstName: types.string,
    lastName: types.string,
    nationalId: types.string,
  }),
  handleChange: types.func,
  handleBlur: types.func,
  t: types.func,
};

export default withTranslation('registration')(General);

import React from 'react';
import types from 'prop-types';
import { withTranslation } from 'i18n';
import { Input, FieldLabel, ErrorMessage } from '../../../../../../view/ui';
import styles from './style.module.scss';

function General({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  t,
  personalInfoErrors,
}) {
  return (
    <div className={styles['validation-general']}>
      <p className={styles['validation-description']}>
        {t('personalInfo.general.title')}
      </p>
      <div className={styles['general-name']}>
        <FieldLabel text={t('personalInfo.general.firstName')}>
          <Input
            type="text"
            name="firstName"
            placeholder="John"
            value={values.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
            error={
              errors.firstName && touched.firstName ? errors.firstName : null
            }
          />
          {errors.firstName && touched.firstName ? (
            <ErrorMessage text={errors.firstName} />
          ) : null}
        </FieldLabel>
      </div>
      <div className={styles['general-surname']}>
        <FieldLabel text={t('personalInfo.general.lastName')}>
          <Input
            type="text"
            name="lastName"
            placeholder="Frederick"
            value={values.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.lastName && touched.lastName ? errors.lastName : null}
          />
          {errors.lastName && touched.lastName ? (
            <ErrorMessage text={errors.lastName} />
          ) : null}
        </FieldLabel>
      </div>
      <div className={styles['general-id']}>
        <FieldLabel text={t('personalInfo.general.nationalId')}>
          <Input
            type="text"
            name="nationalId"
            placeholder="12345678901"
            value={values.nationalId}
            onBlur={handleBlur}
            onChange={handleChange}
            error={
              errors.nationalId && touched.nationalId ? errors.nationalId : null
            }
          />
          {errors.nationalId && touched.nationalId ? (
            <ErrorMessage text={errors.nationalId} />
          ) : null}
          {personalInfoErrors
            ? personalInfoErrors.nationalId
              ? personalInfoErrors.nationalId.map((el) => {
                  return <ErrorMessage key={el} text={el} />;
                })
              : null
            : null}
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

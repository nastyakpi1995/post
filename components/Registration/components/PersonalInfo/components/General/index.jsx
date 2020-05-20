import React from 'react';
import types from 'prop-types';
import { withTranslation } from 'i18n';
import { Input, FieldLabel, ErrorMessage } from '../../../../../view/ui';
import styles from './style.module.scss';

function General({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  t,
  serverErrors = {},
  onResetErrors,
  type,
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
          {serverErrors.firstName
            ? serverErrors.firstName.map((el) => {
                return <ErrorMessage key={el} text={el} />;
              })
            : null}
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
          {serverErrors.lastName
            ? serverErrors.lastName.map((el) => {
                return <ErrorMessage key={el} text={el} />;
              })
            : null}
        </FieldLabel>
      </div>
      {type === 'DOC' ? (
        <div className={styles['doc-wrapper']}>
          <div className={styles['doc-inami']}>
            <FieldLabel text={t('personalInfo.general.enumNum')}>
              <Input type="text" onHandleChange={handleChange} />
            </FieldLabel>
          </div>
          <div className={styles['doc-qualification']}>
            <FieldLabel text={t('personalInfo.general.qualification')}>
              <Input type="text" onHandleChange={handleChange} />
            </FieldLabel>
          </div>
        </div>
      ) : null}
      <div className={styles['general-id']}>
        <FieldLabel text={t('personalInfo.general.nationalId')}>
          <Input
            type="text"
            name="nationalId"
            placeholder="12345678901"
            value={values.nationalId}
            onBlur={handleBlur}
            onChange={(e) => {
              if (serverErrors && serverErrors.nationalId) {
                onResetErrors({
                  nationalId: [],
                });
              }
              handleChange(e);
            }}
            error={
              errors.nationalId && touched.nationalId ? errors.nationalId : null
            }
          />
          {errors.nationalId && touched.nationalId ? (
            <ErrorMessage text={errors.nationalId} />
          ) : null}
          {serverErrors.nationalId
            ? serverErrors.nationalId.map((el) => {
                return <ErrorMessage key={el} text={el} />;
              })
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

import React from 'react';
import types from 'prop-types';
import { withTranslation } from 'i18n';
import { GENDER_TYPES } from '../../../../constants';
import {
  FieldLabel,
  Select,
  Input,
  ErrorMessage,
} from '../../../../../view/ui';
import styles from './style.module.scss';

function Personal({
  values,
  errors,
  serverErrors = {},
  touched,
  handleChange,
  t,
  setFieldValue,
  onResetErrors,
}) {
  return (
    <div className={styles['validation-personal']}>
      <p className={styles['validation-description']}>
        {t('personalInfo.personal.title')}
      </p>
      <div className={styles['personal-wrapper']}>
        <div className={styles['personal-date']}>
          <FieldLabel text={t('personalInfo.personal.dateOfBirth')}>
            <Input
              type="date"
              value={values.dateOfBirth}
              onHandleChange={(e) => {
                if (serverErrors && serverErrors.dateOfBirth) {
                  onResetErrors({
                    dateOfBirth: [],
                  });
                }
                handleChange(e);
              }}
              name="date"
            />
            {serverErrors.dateOfBirth
              ? serverErrors.dateOfBirth.map((el) => {
                  return <ErrorMessage key={el} text={el} />;
                })
              : null}
          </FieldLabel>
        </div>
        <div className={styles['personal-gender']}>
          <FieldLabel text={t('personalInfo.personal.gender')}>
            <Select
              options={GENDER_TYPES.map((item) => ({
                value: item,
                label: item,
              }))}
              name="gender"
              onChange={({ value, label }) => setFieldValue('gender', value)}
              defaultValue={{ value: values.gender, label: values.gender }}
              getOptionValue={() => ({
                value: values.gender,
                label: values.gender,
              })}
            />
          </FieldLabel>
        </div>
      </div>
    </div>
  );
}

Personal.propTypes = {
  values: types.shape({
    dateOfBirth: types.string,
    gender: types.oneOf(GENDER_TYPES),
  }),
  errors: types.shape({
    dateOfBirth: types.string,
    gender: types.string,
  }),
  touched: types.shape({
    dateOfBirth: types.string,
    gender: types.string,
  }),
  handleChange: types.func,
  t: types.func,
};

export default withTranslation('registration')(Personal);

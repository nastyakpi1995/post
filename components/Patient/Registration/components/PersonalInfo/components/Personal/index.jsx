import React from 'react';
import types from 'prop-types';
import { withTranslation } from 'i18n';
import Input from '../../../../../../view/ui/Input';
import { GENDER_TYPES } from '../../../../constants';
import { FieldLabel, NativeSelect } from '../../../../../../view/ui';
import styles from './style.module.scss';

function Personal({ values, errors, touched, handleChange, handleBlur, t }) {
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
              onHandleChange={handleChange}
              name="date"
            />
          </FieldLabel>
        </div>
        <div className={styles['personal-gender']}>
          <FieldLabel text={t('personalInfo.personal.gender')}>
            <NativeSelect
              options={GENDER_TYPES}
              name="gender"
              value={values.gender}
              onHandleBlur={handleBlur}
              onHandleChange={handleChange}
            />
            {errors.gender && touched.gender ? (
              <div>{errors.gender}</div>
            ) : null}
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
  handleBlur: types.func,
  t: types.func,
};

export default withTranslation('registration')(Personal);

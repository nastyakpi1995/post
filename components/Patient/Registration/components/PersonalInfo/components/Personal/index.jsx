import React from 'react';
import types from 'prop-types';
import Input from '../../../../../../view/ui/Input';
import FieldLabel from '../../../../../../view/ui/FieldLabel';
import { GENDER_TYPES } from '../../../../constants';
import { Select } from '../../../../../../view/ui';
import styles from './style.module.scss';

export default function Personal({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <div className={styles['validation-personal']}>
      <p className={styles['validation-description']}>Personal information</p>
      <div className={styles['personal-wrapper']}>
        <div className={styles['personal-date']}>
          <FieldLabel text="date of birth">
            <Input
              type="date"
              value={values.dateOfBirth}
              onHandleChange={handleChange}
              name="date"
            />
          </FieldLabel>
        </div>
        <div className={styles['personal-gender']}>
          <FieldLabel text="gender">
            <Select
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
};

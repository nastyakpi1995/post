import React from 'react';
import types from 'prop-types';
import { Input, FieldLabel } from '../../../../../../view/ui';
import styles from './style.module.scss';

export default function General({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <div className={styles['validation-general']}>
      <p className={styles['validation-description']}>General information</p>
      <div className={styles['general-name']}>
        <FieldLabel text="first name">
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
        <FieldLabel text="last name">
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
        <FieldLabel text="national id">
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
    nationalId: types.oneOfType(types.number, types.string),
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
};

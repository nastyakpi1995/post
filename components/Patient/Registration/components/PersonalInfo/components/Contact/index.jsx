import React from 'react';
import types from 'prop-types';
import Input from '../../../../../../view/ui/Input';
import FieldLabel from '../../../../../../view/ui/FieldLabel';
import { CITIES, COUNTRIES } from '../../../../constants';
import styles from './style.module.scss';
import { Select } from '../../../../../../view/ui';

export default function Contact({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <div className={styles['validation-contact']}>
      <p className={styles['validation-description']}>Contact information</p>
      <div className={styles['contact-wrapper']}>
        <div className={styles['contact-country']}>
          <FieldLabel text="country">
            <Select
              options={COUNTRIES}
              name="country"
              value={values.country}
              onHandleBlur={handleBlur}
              onHandleChange={handleChange}
            />
          </FieldLabel>
        </div>
        <div className={styles['contact-city']}>
          <FieldLabel text="city">
            <Select
              options={CITIES}
              name="city"
              value={values.city}
              onHandleBlur={handleBlur}
              onHandleChange={handleChange}
            />
          </FieldLabel>
        </div>
      </div>
      <div className={styles['contact-direction']}>
        <FieldLabel text="direction">
          <Input
            type="text"
            name="direction"
            value={values.direction}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.direction && touched.direction ? (
            <div>{errors.direction}</div>
          ) : null}
        </FieldLabel>
      </div>
      <div className={styles['contact-optional']}>
        <div className={styles['contact-house']}>
          <FieldLabel text="house number">
            <Input
              type="number"
              placeholder="26"
              name="houseNumber"
              value={values.houseNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.houseNumber && touched.houseNumber ? (
              <div>{errors.houseNumber}</div>
            ) : null}
          </FieldLabel>
        </div>
        <div className={styles['contact-apartment']}>
          <FieldLabel text="apartment number">
            <Input
              type="number"
              placeholder="3"
              name="apartmentNumber"
              value={values.apartmentNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.apartmentNumber && touched.apartmentNumber ? (
              <div>{errors.apartmentNumber}</div>
            ) : null}
          </FieldLabel>
        </div>
        <div className={styles['contact-floor']}>
          <FieldLabel text="floor (optional)">
            <Input
              type="number"
              placeholder="2"
              name="floorNumber"
              value={values.floorNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FieldLabel>
        </div>
      </div>
      <div className={styles['contact-zip']}>
        <FieldLabel text="zip code">
          <Input
            type="number"
            placeholder="1000"
            name="zipCode"
            value={values.zipCode}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.zipCode && touched.zipCode ? (
            <div>{errors.zipCode}</div>
          ) : null}
        </FieldLabel>
      </div>
      <div className={styles['contact-email']}>
        <FieldLabel text="email">
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </FieldLabel>
      </div>
    </div>
  );
}

Contact.propTypes = {
  values: types.shape({
    country: types.oneOf(COUNTRIES),
    city: types.oneOf(CITIES),
    direction: types.string,
    houseNumber: types.oneOfType(types.string, types.number),
    apartmentNumber: types.oneOfType(types.string, types.number),
    floorNumber: types.oneOfType(types.string, types.number),
    zipCode: types.oneOfType(types.string, types.number),
    email: types.string,
  }),
  errors: types.shape({
    country: types.string,
    city: types.string,
    direction: types.string,
    houseNumber: types.string,
    apartmentNumber: types.string,
    floorNumber: types.string,
    zipCode: types.string,
    email: types.string,
  }),
  touched: types.shape({
    country: types.string,
    city: types.string,
    direction: types.string,
    houseNumber: types.string,
    apartmentNumber: types.string,
    floorNumber: types.string,
    zipCode: types.string,
    email: types.string,
  }),
  handleChange: types.func,
  handleBlur: types.func,
};

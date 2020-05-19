import React from 'react';
import types from 'prop-types';
import { withTranslation } from 'i18n';
import { getCountries, getCities } from 'countries-cities';
import {
  Input,
  FieldLabel,
  Select,
  ErrorMessage,
} from '../../../../../../view/ui';
import styles from './style.module.scss';

function Contact({
  personalInfoErrors,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  t,
  setFieldValue,
  onResetErrors,
}) {
  return (
    <div className={styles['validation-contact']}>
      <p className={styles['validation-description']}>
        {t('personalInfo.contact.title')}
      </p>
      <div className={styles['contact-wrapper']}>
        <div className={styles['contact-country']}>
          <FieldLabel text={t('personalInfo.contact.country')}>
            <Select
              options={getCountries().map((item) => ({
                value: item,
                label: item,
              }))}
              name="country"
              onChange={({ value, label }) => {
                setFieldValue('country', value);
                setFieldValue('city', getCities(value));
              }}
              defaultValue={{ value: values.country, label: values.country }}
              getOptionValue={() => ({
                value: values.country,
                label: values.country,
              })}
            />
          </FieldLabel>
        </div>
        <div className={styles['contact-city']}>
          <FieldLabel text={t('personalInfo.contact.city')}>
            <Select
              options={getCities(values.country).map((item) => ({
                value: item,
                label: item,
              }))}
              name="city"
              onChange={({ value, label }) => setFieldValue('city', value)}
              defaultValue={{ value: values.city, label: values.city }}
              getOptionValue={() => ({
                value: values.city,
                label: values.city,
              })}
            />
          </FieldLabel>
        </div>
      </div>
      <div className={styles['contact-direction']}>
        <FieldLabel text={t('personalInfo.contact.direction')}>
          <Input
            type="text"
            placeholder="Direction"
            name="direction"
            value={values.direction}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              errors.direction && touched.direction ? errors.direction : null
            }
          />
          {errors.direction && touched.direction ? (
            <ErrorMessage text={errors.direction} />
          ) : null}
        </FieldLabel>
      </div>
      <div className={styles['contact-optional']}>
        <div className={styles['contact-house']}>
          <FieldLabel text={t('personalInfo.contact.houseNumber')}>
            <Input
              type="text"
              placeholder="1a"
              name="houseNumber"
              value={values.houseNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.houseNumber && touched.houseNumber
                  ? errors.houseNumber
                  : null
              }
            />
            {errors.houseNumber && touched.houseNumber ? (
              <ErrorMessage text={errors.houseNumber} />
            ) : null}
          </FieldLabel>
        </div>
        <div className={styles['contact-apartment']}>
          <FieldLabel text={t('personalInfo.contact.apartmentNumber')}>
            <Input
              type="text"
              placeholder="2b"
              name="apartmentNumber"
              value={values.apartmentNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.apartmentNumber && touched.apartmentNumber
                  ? errors.apartmentNumber
                  : null
              }
            />
            {errors.apartmentNumber && touched.apartmentNumber ? (
              <ErrorMessage text={errors.apartmentNumber} />
            ) : null}
          </FieldLabel>
        </div>
        <div className={styles['contact-floor']}>
          <FieldLabel text={t('personalInfo.contact.floorNumber')}>
            <Input
              type="number"
              name="floor"
              placeholder="3"
              value={values.floor}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.floor && touched.floor ? errors.floor : null}
            />
            {errors.floor && touched.floor ? (
              <ErrorMessage text={errors.floor} />
            ) : null}
          </FieldLabel>
        </div>
      </div>
      <div className={styles['contact-zip']}>
        <FieldLabel text={t('personalInfo.contact.zipCode')}>
          <Input
            type="text"
            name="zipCode"
            placeholder="1000"
            value={values.zipCode}
            onChange={(e) => {
              if (personalInfoErrors !== undefined) {
                if (personalInfoErrors.zipCode !== undefined) {
                  onResetErrors({
                    zipCode: [],
                  });
                }
              }
              handleChange(e);
            }}
            onBlur={handleBlur}
            error={errors.zipCode && touched.zipCode ? errors.zipCode : null}
          />
          {errors.zipCode && touched.zipCode ? (
            <ErrorMessage text={errors.zipCode} />
          ) : null}
          {personalInfoErrors
            ? personalInfoErrors.zipCode
              ? personalInfoErrors.zipCode.map((el) => {
                  return <ErrorMessage key={el} text={el} />;
                })
              : null
            : null}
        </FieldLabel>
      </div>
      <div className={styles['contact-email']}>
        <FieldLabel text={t('personalInfo.contact.email')}>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="name@email.com"
            onBlur={handleBlur}
            error={errors.email && touched.email ? errors.email : null}
          />
          {errors.email && touched.email ? (
            <ErrorMessage text={errors.email} />
          ) : null}
        </FieldLabel>
      </div>
    </div>
  );
}

Contact.propTypes = {
  values: types.shape({
    country: types.any,
    city: types.any,
    direction: types.string,
    houseNumber: types.oneOfType([types.string, types.number]),
    apartmentNumber: types.oneOfType([types.string, types.number]),
    floorNumber: types.oneOfType([types.string, types.number]),
    zipCode: types.oneOfType([types.string, types.number]),
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
  t: types.func,
};

export default withTranslation('registration')(Contact);

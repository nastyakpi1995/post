import React from 'react';
import { withTranslation } from 'i18n';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Header } from '../../common';
import { Button } from '../../../../view/ui';
import { General, Contact, Personal } from './components';
import { GENDER_TYPES, COUNTRIES, CITIES } from '../../constants';
import styles from './style.module.scss';

const RegisterSchema = (t) =>
  Yup.object({
    firstName: Yup.string().required(t('validation.required')),
    lastName: Yup.string().required(t('validation.required')),
    nationalId: Yup.string().required(t('validation.required')),
    dateOfBirth: Yup.string().required(t('validation.required')),
    gender: Yup.string().required(t('validation.required')),
    country: Yup.string().required(t('validation.required')),
    city: Yup.string().required(t('validation.required')),
    direction: Yup.string().required(t('validation.required')),
    houseNumber: Yup.string().required(t('validation.required')),
    apartmentNumber: Yup.number(),
    floorNumber: Yup.number(),
    zipCode: Yup.number().required(t('validation.required')),
    email: Yup.string().email().required(t('validation.required')),
  });
function PersonalInfo({ onHandleChangePage = () => {}, t }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.validation}>
          <h1 className={styles['validation-title']}>
            {t('personalInfo.title')}
          </h1>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              nationalId: '',
              dateOfBirth: '2002-08-16',
              gender: GENDER_TYPES[0],
              country: COUNTRIES[0],
              city: CITIES[0],
              direction: '',
              houseNumber: '',
              apartmentNumber: '',
              floorNumber: '',
              zipCode: '',
              email: '',
            }}
            validationSchema={RegisterSchema(t)}
            onSubmit={(values, actions) => {
              // TODO: should save values to redux here
              onHandleChangePage();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <General
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Personal
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Contact
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <div className={styles['validation-button']}>
                  <Button
                    type="submit"
                    className={styles['validation-button__saveProfile']}
                    text={t('personalInfo.save')}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default withTranslation('registration')(PersonalInfo);

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Header } from '../../common';
import { Button } from '../../../common';
import { General, Contact, Personal } from './components';
import { GENDER_TYPES, COUNTRIES, CITIES } from '../../constants';
import styles from './style.module.scss';

const RegisterSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  nationalId: Yup.string().required(),
  dateOfBirth: Yup.string().required(),
  gender: Yup.string().required(),
  country: Yup.string().required(),
  city: Yup.string().required(),
  direction: Yup.string().required(),
  houseNumber: Yup.string().required(),
  apartmentNumber: Yup.number(),
  floorNumber: Yup.number(),
  zipCode: Yup.number().required(),
  email: Yup.string().email().required(),
});
export default function PersonalInfo({ onHandleChangePage = () => {} }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.validation}>
          <h1 className={styles['validation-title']}>Complete Your Profile</h1>
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
            validationSchema={RegisterSchema}
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
                    text="save profile data"
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

import React, { useEffect } from 'react';
import { withTranslation } from 'i18n';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { getCountries, getCities } from 'countries-cities';
import Header from '../../../../view/objects/AuthHeader';
import { Button } from '../../../../view/ui';
import { General, Contact, Personal } from './components';
import { GENDER_TYPES } from '../../constants';
import styles from './style.module.scss';
import RegisterPersonalSchema from '../../Forms/registerForm/PersonalForm';
import * as registrationActions from '../../../../../redux/actions/registrationActions';

function PersonalInfo({
  onHandleChangePage,
  t,
  personalInfoSuccess,
  onRequestPersonalInfo,
  personalInfoErrors,
}) {
  useEffect(() => {
    if (personalInfoSuccess) {
      onHandleChangePage();
    }
  }, [personalInfoSuccess]);

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
              country: getCountries()[21], // Belgium
              city: getCities(getCountries()[21])[0],
              direction: '',
              houseNumber: '',
              apartmentNumber: '',
              floor: '',
              zipCode: '',
              email: '',
            }}
            validationSchema={RegisterPersonalSchema(t)}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                const updatedData = {
                  ...values,
                  gender: values.gender === GENDER_TYPES[0] ? 'm' : 'fm',
                };
                onRequestPersonalInfo(updatedData);
              }, 0);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <General
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  personalInfoErrors={personalInfoErrors}
                />
                <Personal
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  personalInfoErrors={personalInfoErrors}
                />
                <Contact
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  personalInfoErrors={personalInfoErrors}
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

const mapDispatchToProps = (dispatch) => ({
  onRequestPersonalInfo: (data) =>
    dispatch(registrationActions.requestPersonalInfo(data)),
});

const mapStateToProps = (state) => ({
  personalInfo: state.registration.personalInfo,
  personalInfoErrors: state.registration.personalInfoErrors,
  personalInfoSuccess: state.registration.personalInfoSuccess,
});

export default withTranslation('registration')(
  connect(mapStateToProps, mapDispatchToProps)(PersonalInfo),
);

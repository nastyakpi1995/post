import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'i18n';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import Header from '../../../view/objects/AuthHeader';
import { Button, Input, FieldLabel } from '../../../view/ui';
import ErrorMessage from '../../../view/ui/ErrorMessage';
import styles from './style.module.scss';
import RegisterConfirmSchema from '../../Forms/registerForm/ConfigmationForm';
import * as registrationActions from '../../../../redux/actions/registrationActions';

function Confirmation({
  onHandleChangePage = () => {},
  handleRequestCode = () => {},
  onLoginHandler = () => {},
  t,
  onSentConfirmation,
  serverErrors,
  generalInfo,
  confirmationSuccess,
  onResetErrors,
}) {
  useEffect(() => {
    if (confirmationSuccess) {
      onHandleChangePage();
    }
  }, [confirmationSuccess]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Formik
          initialValues={{ confirmCode: '' }}
          validationSchema={RegisterConfirmSchema(t)}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              const updatedData = {
                ...generalInfo,
                ...values,
              };

              onSentConfirmation(updatedData);
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
          }) => (
            <form className={styles.validation} onSubmit={handleSubmit}>
              <h1 className={styles['validation-title']}>
                {t('confirmation.title')}
              </h1>
              <p className={styles['validation-number__helper']}>
                {`${t('confirmation.weHaveSent')} `}
                <span
                  className={styles.telephone}
                >{`${generalInfo.phoneNumber}. `}</span>
                {t('confirmation.pleaseFillTheField')}
              </p>
              <FieldLabel text={t('confirmation.label')}>
                <Input
                  type="number"
                  className={styles['input-confirmCode']}
                  placeholder="111111"
                  value={values.confirmCode}
                  onChange={(e) => {
                    if (serverErrors.nonFieldErrors) {
                      onResetErrors({
                        nonFieldErrors: [],
                      });
                    }
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  name="confirmCode"
                  error={
                    touched.confirmCode && errors.confirmCode
                      ? errors.confirmCode
                      : null
                  }
                />
                {touched.confirmCode && errors.confirmCode ? (
                  <ErrorMessage text={errors.confirmCode} />
                ) : null}
                {serverErrors.nonFieldErrors
                  ? serverErrors.nonFieldErrors.map((el) => {
                      return <ErrorMessage key={el} text={el} />;
                    })
                  : null}
              </FieldLabel>
              <Button
                type="submit"
                id="submitCode"
                className={styles['validation-button__submitCode']}
                text={t('confirmation.buttonSubmit')}
              />
              <Button
                id="requestCode"
                className={styles['validation-button__requestCode']}
                text={t('confirmation.requestCode')}
                handleClick={handleRequestCode}
              />
              <Button
                id="logInCode"
                type="submit"
                className={styles['validation-button__login']}
                text={t('confirmation.buttonLogIn')}
                handleClick={onLoginHandler}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

Confirmation.propTypes = {
  onHandleChangePage: PropTypes.func,
  handleRequestCode: PropTypes.func,
  handleLogIn: PropTypes.func,
  t: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onSentConfirmation: (generalInfo) =>
    dispatch(registrationActions.requestGeneralInfo(generalInfo)),
  onResetErrors: (data) =>
    dispatch(registrationActions.errorConfirmation(data)),
});

const mapStateToProps = (state) => ({
  generalInfo: state.registration.generalInfo,
  serverErrors: state.registration.confirmationErrors,
  confirmationSuccess: state.registration.confirmationSuccess,
  generalSuccess: state.registration.generalSuccess,
});

export default withTranslation('registration')(
  connect(mapStateToProps, mapDispatchToProps)(Confirmation),
);

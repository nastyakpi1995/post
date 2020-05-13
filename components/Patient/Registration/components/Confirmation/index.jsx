import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'i18n';
import { Formik } from 'formik';
import Header from '../../../../view/objects/AuthHeader';
import Input from '../../../../view/ui/Input';
import FieldLabel from '../../../../view/ui/FieldLabel';
import { Button } from '../../../../view/ui';
import styles from './style.module.scss';
import RegisterSchema from '../../Forms/registerForm/ConfigmationForm';

function Confirmation({
  onHandleChangePage = () => {},
  handleRequestCode = () => {},
  handleLogIn = () => {},
  t,
  mobileNumber = '+32345789524', // example
}) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Formik
          initialValues={{ confirmCode: '' }}
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
            <form className={styles.validation} onSubmit={handleSubmit}>
              <h1 className={styles['validation-title']}>
                {t('confirmation.title')}
              </h1>
              <p className={styles['validation-number__helper']}>
                {`${t('confirmation.weHaveSent')} `}
                <span className={styles.telephone}>{`${mobileNumber}. `}</span>
                {t('confirmation.pleaseFillTheField')}
              </p>
              <FieldLabel text={t('confirmation.label')}>
                <Input
                  type="text"
                  placeholder="12-34-56"
                  value={values.confirmCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="confirmCode"
                />
                {touched.confirmCode && errors.confirmCode ? (
                  <div>{errors.confirmCode}</div>
                ) : null}
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
                className={styles['validation-button__login']}
                text={t('confirmation.login')}
                handleClick={handleLogIn}
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

export default withTranslation('registration')(Confirmation);

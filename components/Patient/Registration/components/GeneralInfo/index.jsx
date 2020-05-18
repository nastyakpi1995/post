import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Formik } from 'formik';
import { withTranslation } from 'i18n';
import { connect } from 'react-redux';
import TermsOfUse from '../../common/TermsOfUse';
import Header from '../../../../view/objects/AuthHeader';
import {
  Button,
  Checkbox,
  Input,
  FieldLabel,
  InputPhone,
  ErrorMessage,
} from '../../../../view/ui';
import * as registrationActions from '../../../../../redux/actions/registrationActions';
import RegisterSchema from '../../Forms/registerForm/GeneralForm';
import styles from './style.module.scss';

function GeneralInfo({
  onHandleChangePage,
  t,
  onRequestSignUp,
  serverErrors,
  generalSuccess,
}) {
  useEffect(() => {
    if (generalSuccess) {
      onHandleChangePage();
    }
  }, [generalSuccess]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Formik
          initialValues={{
            password: '',
            phoneNumber: '',
            repeatPassword: '',
            phoneCode: '1',
            saveUser: true,
            terms: true,
          }}
          validationSchema={RegisterSchema(t)}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              const updatedValues = {
                ...values,
                phoneNumber: `+${values.phoneCode}${values.phoneNumber}`,
                userType: 'CUS',
              };
              delete updatedValues.saveUser;
              delete updatedValues.terms;
              delete updatedValues.phoneCode;
              onRequestSignUp(updatedValues);
              actions.setFieldTouched('phoneNumber', false);
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
          }) => {
            return (
              <form onSubmit={handleSubmit} className={styles.validation}>
                <h1 className={styles['validation-title']}>
                  {t('generalInfo.createAccount')}
                </h1>
                <p className={styles['validation-number__helper']}>
                  {t('generalInfo.phoneInfo')}
                </p>
                <div className={styles['validation-number']}>
                  <div className={styles['validation-number__first']}>
                    <FieldLabel text={t('generalInfo.areaCode')}>
                      <InputPhone
                        name="phoneCode"
                        country="us"
                        value={values.phoneCode}
                        onChange={(phone) => {
                          setFieldValue('phoneCode', phone);
                        }}
                        enableAreaCodes
                      />
                    </FieldLabel>
                  </div>
                  <div className={styles['validation-number__second']}>
                    <FieldLabel text={t('generalInfo.localNumber')}>
                      <Input
                        type="number"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={values.localNumber}
                        name="phoneNumber"
                        value={values.localNumber}
                      />
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <ErrorMessage text={errors.phoneNumber} />
                      ) : null}
                      {serverErrors &&
                      serverErrors.phoneNumber &&
                      !touched.phoneNumber
                        ? serverErrors.phoneNumber.map((el) => {
                            return <ErrorMessage key={el} text={el} />;
                          })
                        : null}
                    </FieldLabel>
                  </div>
                </div>
                <p className={styles['validation-password__helper']}>
                  {t('generalInfo.passwordInfo')}
                </p>
                <div className={styles['validation-password']}>
                  <FieldLabel text={t('generalInfo.password')}>
                    <Input
                      type="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      error={
                        touched.password && errors.password
                          ? errors.password
                          : null
                      }
                    />
                    {touched.password && errors.password ? (
                      <ErrorMessage text={errors.password} />
                    ) : null}
                  </FieldLabel>
                </div>
                <div className={styles['validation-password']}>
                  <FieldLabel text={t('generalInfo.repeatPassword')}>
                    <Input
                      type="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Repeat Password"
                      name="repeatPassword"
                      error={
                        touched.repeatPassword && errors.repeatPassword
                          ? errors.repeatPassword
                          : null
                      }
                    />
                    {touched.repeatPassword && errors.repeatPassword ? (
                      values.repeatPassword === values.password ? (
                        <ErrorMessage text={errors.repeatPassword} />
                      ) : (
                        <ErrorMessage text="Passwords are not equal" />
                      )
                    ) : null}
                  </FieldLabel>
                </div>
                <div className={styles['validation-changelist']}>
                  <div
                    className={cn(
                      styles.checkbox__align,
                      styles['validation-changelist__license'],
                      {
                        [styles[
                          'validation-changelist__saveUser__not_active'
                        ]]: !values.terms,
                      },
                    )}
                  >
                    <Checkbox
                      name="terms"
                      onChange={handleChange}
                      checked={values.terms}
                    />
                    <TermsOfUse />
                  </div>
                  {touched.terms && errors.terms ? (
                    <ErrorMessage text={errors.terms} />
                  ) : null}
                  <div
                    className={cn(
                      styles.checkbox__align,
                      styles['validation-changelist__saveUser'],
                      {
                        [styles[
                          'validation-changelist__saveUser__not_active'
                        ]]: !values.saveUser,
                      },
                    )}
                  >
                    <Checkbox
                      name="saveUser"
                      onChange={handleChange}
                      checked={values.saveUser}
                    />
                    {t('generalInfo.keepLogged')}
                  </div>
                  {touched.saveUser && errors.saveUser ? (
                    <ErrorMessage text={errors.saveUser} />
                  ) : null}
                </div>
                <Button
                  type="submit"
                  className={styles['validation-button__save']}
                  text={t('generalInfo.save')}
                />
                <Button
                  className={styles['validation-button__login']}
                  text={t('generalInfo.login')}
                />
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

GeneralInfo.propTypes = {
  onHandleChangePage: PropTypes.func,
  t: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onRequestSignUp: (data) =>
    dispatch(registrationActions.requestConfirmation(data)),
});

const mapStateToProps = (state) => ({
  generalInfo: state.registration.generalInfo,
  generalSuccess: state.registration.generalSuccess,
  serverErrors: state.registration.generalErrors,
});

export default withTranslation('registration')(
  connect(mapStateToProps, mapDispatchToProps)(GeneralInfo),
);

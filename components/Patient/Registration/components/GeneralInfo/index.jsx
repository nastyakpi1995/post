import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Formik } from 'formik';
import { withTranslation } from 'i18n';
import TermsOfUse from '../../common/TermsOfUse';
import Header from '../../../../view/objects/AuthHeader';
import Input from '../../../../view/ui/Input';
import FieldLabel from '../../../../view/ui/FieldLabel';
import { Button, Checkbox } from '../../../../view/ui';
import InputPhone from '../../../../view/ui/InputPhone';
import ErrorMessage from '../../../../view/ui/ErrorMessage';
import { MOBILE_PHONE_CODES } from '../../constants';
import RegisterSchema from '../../Forms/registerForm/GeneralForm';
import styles from './style.module.scss';

function GeneralInfo({ onHandleChangePage, t }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Formik
          initialValues={{
            password: '',
            phoneNumber: '',
            repeatPassword: '',
            phoneCode: MOBILE_PHONE_CODES[0],
            saveUser: true,
            terms: true,
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
                        value={values.phoneCode}
                        onChange={handleChange}
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
                    />
                    {touched.repeatPassword && errors.repeatPassword ? (
                      <ErrorMessage text={errors.repeatPassword} />
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

export default withTranslation('registration')(GeneralInfo);

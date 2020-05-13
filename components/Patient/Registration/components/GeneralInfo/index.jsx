import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Formik } from 'formik';
import { withTranslation } from 'i18n';
import { TermsOfUse } from '../../common/TermsOfUse';
import Header from "../../../../view/objects/AuthHeader";
import Input from '../../../../view/ui/Input';
import FieldLabel from '../../../../view/ui/FieldLabel';
import { Button, Checkbox, NativeSelect } from '../../../../view/ui';
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
          }) => (
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
                    <NativeSelect
                      options={MOBILE_PHONE_CODES}
                      name="phoneCode"
                      onHandleBlur={handleChange}
                      onHandleChange={handleBlur}
                      value={values.numberCode}
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
                      <div>{errors.phoneNumber}</div>
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
                    <div>{errors.password}</div>
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
                    <div>{errors.repeatPassword}</div>
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
                    // onHandleChange={handleChange}
                    onClick={() => {}}
                    // value={values.terms}
                  />
                  <TermsOfUse />
                  {touched.terms && errors.terms ? (
                    <div>{errors.terms}</div>
                  ) : null}
                </div>
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
                    // onHandleChange={handleChange}
                    // value={values.saveUser}
                    onClick={() => {}}
                  />
                  {t('generalInfo.keepLogged')}
                </div>
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
          )}
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

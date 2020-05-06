import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Header, TermsOfUse } from '../../common';
import Input from '../../../../view/ui/Input';
import { Button, Checkbox, Select } from '../../../common';
import { MOBILE_PHONE_CODES } from '../../constants';
import styles from './style.module.scss';

const RegisterSchema = Yup.object({
  password: Yup.string().max(15, 'Must be 15 characters or less').required(),
  repeatPassword: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required(),
  phoneNumber: Yup.number().required().moreThan(0, 'Could not be negative'),
  saveUser: Yup.bool().oneOf([true], 'Keep me logged in'),
  terms: Yup.bool().oneOf([true], 'Terms of Use'),
});
export default function GeneralInfo({ onHandleChangePage }) {
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
            <form onSubmit={handleSubmit} className={styles.validation}>
              <h1 className={styles['validation-title']}>Create an account</h1>
              <p className={styles['validation-number__helper']}>
                We use phone number as a login. Be calm, we won&apos;t give your
                number to anyone.
              </p>
              <div className={styles['validation-number']}>
                <div className={styles['validation-number__first']}>
                  <label className={cn(styles.number__align, styles.helper)}>
                    area code
                    <Select
                      options={MOBILE_PHONE_CODES}
                      name="phoneCode"
                      onHandleBlur={handleChange}
                      onHandleChange={handleBlur}
                      value={values.numberCode}
                    />
                  </label>
                </div>
                <div className={styles['validation-number__second']}>
                  <label className={cn(styles.number__align, styles.helper)}>
                    local number
                    <Input
                      type="number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder={values.localNumber}
                      name="phoneNumber"
                      value={values.localNumber}
                    />
                    {errors.localNumber && touched.localNumber ? (
                      <div>{errors.localNumber}</div>
                    ) : null}
                  </label>
                </div>
              </div>
              <p className={styles['validation-password__helper']}>
                Password has to have at least 8 characters, letters, numbers,
                and special characters
              </p>
              <div className={styles['validation-password']}>
                <label className={styles.helper}>
                  password
                  <Input
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </label>
              </div>
              <div className={styles['validation-password']}>
                <label className={styles.helper}>
                  repeat password
                  <Input
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Repeat Password"
                    name="repeatPassword"
                    id="repeatPassword"
                  />
                  {touched.repeatPassword && errors.repeatPassword ? (
                    <div>{errors.repeatPassword}</div>
                  ) : null}
                </label>
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
                    onHandleChange={handleChange}
                    value={values.terms}
                  />
                  <label htmlFor="license" className={styles.label} />
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
                    onHandleChange={handleChange}
                    value={values.saveUser}
                  />
                  <label
                    htmlFor="saveUser"
                    className={cn(styles.checkbox__title, styles.label)}
                  >
                    Keep me logged in
                    {touched.saveUser && errors.saveUser ? (
                      <div>{errors.saveUser}</div>
                    ) : null}
                  </label>
                </div>
              </div>
              <Button
                type="submit"
                id="continueLogIn"
                className={styles['validation-button__save']}
                text="save and continue"
              />
              <Button
                id="logIn"
                className={styles['validation-button__login']}
                text="Log in"
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
};

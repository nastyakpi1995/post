import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Header } from '../../common';
import Input from '../../../../view/ui/Input';
import { Button } from '../../../common';
import styles from './style.module.scss';

const Confirmation = ({
  onHandleChangePage = () => {},
  handleRequestCode = () => {},
  handleLogIn = () => {},
}) => {
  const formik = useFormik({
    initialValues: {
      confirmCode: '',
    },
    validationSchema: Yup.object({
      confirmCode: Yup.string()
        .test(
          'confirmCode',
          'Must be exactly 8 characters',
          (val) => val.length === 8,
        )
        .required(),
    }),
    onSubmit: () => {
      onHandleChangePage();
    },
  });

  const { handleChange, handleSubmit, values, touched, errors } = formik;

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <form className={styles.validation} onSubmit={handleSubmit}>
          <h1 className={styles['validation-title']}>
            What is your confirmation code?
          </h1>
          <p className={styles['validation-number__helper']}>
            We&apos;ve sent the confirmation code to the number{' '}
            <span className={styles.telephone}>+32345789524</span>. Please fill
            the field and you&apos;ll be loged in.
          </p>
          <label className={styles.helper}>
            confirmation code
            <Input
              type="text"
              placeholder="12-34-56"
              value={values.confirmCode}
              onChange={handleChange}
              name="confirmCode"
            />
            {touched.confirmCode && errors.confirmCode ? (
              <div>{errors.confirmCode}</div>
            ) : null}
          </label>
          <Button
            type="submit"
            id="submitCode"
            className={styles['validation-button__submitCode']}
            text="submit confirmation code"
          />
          <Button
            id="requestCode"
            className={styles['validation-button__requestCode']}
            text="request code again"
            handleClick={handleRequestCode}
          />
          <Button
            id="logInCode"
            className={styles['validation-button__login']}
            text="Log in"
            handleClick={handleLogIn}
          />
        </form>
      </div>
    </div>
  );
};

Confirmation.propTypes = {
  onHandleChangePage: PropTypes.func,
  handleRequestCode: PropTypes.func,
  handleLogIn: PropTypes.func,
};

export default Confirmation;

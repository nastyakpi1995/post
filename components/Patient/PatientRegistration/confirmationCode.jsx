import React from 'react';
import styles from './registration.module.scss';
import Input from '../Forms/input';

const ConfirmationCode = () => {
  return (
    <div className={styles['block-body']}>
      <form className={styles.validation}>
        <h1 className={styles['validation-title']}>
          What is your confirmation code?
        </h1>
        <p className={styles['validation-number__helper']}>
          We&apos;ve sent the confirmation code to the number{' '}
          <span className={styles.telephone}>+32345789524</span>. Please fill
          the field and you&apos;ll be loged in.
        </p>
        <p className={styles.helper}>confirmation code</p>
        <Input
          type="text"
          placeholder="12-34-56"
          id="confirmCode"
          className={styles.password}
        />
        <button
          className={styles['validation-button__submitCode']}
          id="submitCode"
          type="button"
        >
          submit confirmation code
        </button>
        <button
          className={styles['validation-button__requestCode']}
          id="requestCode"
          type="button"
        >
          request code again
        </button>
        <button
          className={styles['validation-button__login']}
          id="logInCode"
          type="button"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default ConfirmationCode;

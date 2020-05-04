import React from 'react';
import Input from '../../../../Forms/Input/Input';
import Button from '../../../../Forms/Button';
import styles from './confirmation.module.scss';

const Confirmation = () => {
  return (
    <div className={styles.container}>
      <form className={styles.validation}>
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
          <Input type="text" placeholder="12-34-56" id="confirmCode" />
        </label>
        <Button
          id="submitCode"
          className={styles['validation-button__submitCode']}
          text="submit confirmation code"
        />
        <Button
          id="requestCode"
          className={styles['validation-button__requestCode']}
          text="request code again"
        />
        <Button
          id="logInCode"
          className={styles['validation-button__login']}
          text="Log in"
        />
      </form>
    </div>
  );
};

export default Confirmation;

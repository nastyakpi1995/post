import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '../Header';
import Input from '../../../view/ui/Input';
import Button from '../../Forms/Button';
import Checkbox from '../../Forms/Checkbox';
import NumberCod from '../../Forms/NumberCode';
import styles from './style.module.scss';

export default function Step1({ onHandleChangePage }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <form className={styles.validation}>
          <h1 className={styles['validation-title']}>Create an account</h1>
          <p className={styles['validation-number__helper']}>
            We use phone number as a login. Be calm, we won&apos;t give your
            number to anyone.
          </p>
          <div className={styles['validation-number']}>
            <div className={styles['validation-number__first']}>
              <label
                className={classNames(styles.number__align, styles.helper)}
              >
                area code
                <NumberCod id="numberCod" />
              </label>
            </div>
            <div className={styles['validation-number__second']}>
              <label
                className={classNames(styles.number__align, styles.helper)}
              >
                local number
                <Input type="number" placeholder="123456789" id="numberValue" />
              </label>
            </div>
          </div>
          <p className={styles['validation-password__helper']}>
            Password has to have at least 8 characters, letters, numbers, and
            special characters
          </p>
          <div className={styles['validation-password']}>
            <label className={styles.helper}>
              password
              <Input
                type="password"
                placeholder="***************"
                id="password"
              />
            </label>
          </div>
          <div className={styles['validation-password']}>
            <label className={styles.helper}>
              repeat password
              <Input
                type="password"
                placeholder="***************"
                id="dublicatePassword"
              />
            </label>
          </div>
          <div className={styles['validation-changelist']}>
            <div
              className={classNames(
                styles.checkbox__align,
                styles['validation-changelist__license'],
              )}
            >
              <Checkbox id="license" />
              <label htmlFor="license" className={styles.label} />
              <p className={styles.checkbox__title}>
                I have read and accept DocWho{' '}
                <span>
                  <a href="#" className={classNames(styles.link, styles.terms)}>
                    Terms of Use
                  </a>
                </span>{' '}
                and{' '}
                <span>
                  <a
                    href="#"
                    className={classNames(styles.link, styles.policy)}
                  >
                    Privacy Policy
                  </a>
                </span>
                .
              </p>
            </div>
            <div
              className={classNames(
                styles.checkbox__align,
                styles['validation-changelist__saveUser'],
              )}
            >
              <Checkbox id="saveUser" />
              <label
                htmlFor="saveUser"
                className={classNames(styles.checkbox__title, styles.label)}
              >
                Keep me logged in
              </label>
            </div>
          </div>
          <Button
            handleClick={onHandleChangePage.bind(null, 'Confirmation')}
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
      </div>
    </div>
  );
}

Step1.propTypes = {
  onHandleChangePage: PropTypes.func,
};

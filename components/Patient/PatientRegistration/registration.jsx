import React, { useReducer } from 'react';
import styles from './registration.module.scss';
import Input from '../Forms/input';
import NumberCod from '../Forms/numberCod';
import ConfirmationCode from './confirmationCode';

const initialState = { login: true };

function reducer(state, action) {
  switch (action.type) {
    case 'REGISTRATION_CONTINUE':
      return { login: false };
    default:
      throw new Error();
  }
}

const Registration = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.wrapper}>
      <div className={styles['block-header']}>
        <div className={styles['header-logo']}>
          <div className={styles.logo}>
            <a
              className={`
                ${styles.href} 
                ${styles.logo__value}
             `}
              id="mainPage"
              href="#"
            >
              <span className={styles.doc}>Doc</span>
              <span className={styles.woo}>Woo</span>
            </a>
          </div>
        </div>
        <div className={styles['header-buttons']}>
          <button
            className={styles['header-button__login']}
            id="doctorLogin"
            type="button"
          >
            login as doctor
          </button>
          <select className={styles['header-button__language']} id="language">
            <option>en</option>
            <option>ua</option>
          </select>
        </div>
      </div>
      {state.login ? (
        <div className={styles['block-body']}>
          <form className={styles.validation}>
            <h1 className={styles['validation-title']}>Create an account</h1>
            <p className={styles['validation-number__helper']}>
              We use phone number as a login. Be calm, we won&apos;t give your
              number to anyone.
            </p>
            <div className={styles['validation-number']}>
              <div className={styles['validation-number__first']}>
                <p
                  className={`
                  ${styles.number__align} 
                  ${styles.helper}
               `}
                >
                  area code
                </p>
                <NumberCod
                  id="numberCod"
                  className={styles['validation-number__cod']}
                />
              </div>
              <div className={styles['validation-number__second']}>
                <p
                  className={`
                  ${styles.number__align} 
                  ${styles.helper}
               `}
                >
                  local number
                </p>
                <Input
                  type="number"
                  placeholder="123456789"
                  id="numberValue"
                  className={styles['validation-number__value']}
                />
              </div>
            </div>
            <p className={styles['validation-password__helper']}>
              Password has to have at least 8 characters, letters, numbers, and
              special characters
            </p>
            <p className={styles.helper}>password</p>
            <Input
              type="password"
              placeholder="***************"
              id="password"
              className={styles.password}
            />
            <p className={styles.helper}>repeat password</p>
            <Input
              type="password"
              placeholder="***************"
              id="dublicatePassword"
              className={styles.password}
            />
            <div className={styles['validation-changelist']}>
              <div
                className={`
                ${styles['validation-changelist__license']} 
                ${styles.checkbox__align}
              `}
              >
                <Input
                  type="checkbox"
                  id="license"
                  className={styles.checkbox}
                />
                <label htmlFor="license" className={styles.label} />
                <p className={styles.checkbox__title}>
                  I have read and accept DocWho{' '}
                  <span>
                    <a
                      href="#"
                      className={`
                      ${styles.href} 
                      ${styles.terms}
                    `}
                    >
                      Terms of Use
                    </a>
                  </span>{' '}
                  and{' '}
                  <span>
                    <a
                      href="#"
                      className={`
                      ${styles.href} 
                      ${styles.policy}
                    `}
                    >
                      Privacy Policy
                    </a>
                  </span>
                  .
                </p>
              </div>
              <div
                className={`
                ${styles['validation-changelist__saveUser']} 
                ${styles.checkbox__align}
              `}
              >
                <Input
                  type="checkbox"
                  id="saveUser"
                  className={styles.checkbox}
                />
                <label
                  htmlFor="saveUser"
                  className={`
                  ${styles.checkbox__title} 
                  ${styles.label}
                `}
                >
                  Keep me logged in
                </label>
              </div>
            </div>
            <button
              className={styles['validation-button__save']}
              id="continueLogIn"
              type="button"
              onClick={() => dispatch({ type: 'REGISTRATION_CONTINUE' })}
            >
              save and continue
            </button>
            <button
              className={styles['validation-button__login']}
              id="logIn"
              type="button"
            >
              Log in
            </button>
          </form>
        </div>
      ) : (
        <ConfirmationCode />
      )}
    </div>
  );
};

export default Registration;

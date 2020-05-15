import classNames from 'classnames';
import types from 'prop-types';
import React, { useState, useEffect } from 'react';
import { i18n, withTranslation } from 'i18n';
import { Formik, Field } from 'formik';
import { isValidPhoneNumber } from 'react-phone-number-input';
import * as Yup from 'yup';
import isNil from 'lodash/isNil';

// Components

import FieldLabel from 'components/view/ui/FieldLabel';
import ErrorMessage from 'components/view/ui/ErrorMessage';
import ContainerRow from '../../../layout/ContainerRow';
import InputPhone from '../../../ui/InputPhone';
import CheckboxText from '../../../ui/CheckboxText';
import Input from '../../../ui/Input';
import Text from '../../../ui/Text';
import Button from '../../../ui/Button';
import CustomLink from '../../../ui/CustomLink';

import styles from './style.module.scss';

function LoginForm({ t, onSubmit, type, authErrors }) {
  useEffect(() => {
    localStorage.removeItem('isRememberUser');
  }, []);

  const [value, setValueCheckbox] = useState(false);
  function handleRememberUser() {
    if (value) {
      localStorage.setItem('isRememberUser', false);
    } else {
      localStorage.setItem('isRememberUser', true);
    }
    setValueCheckbox(!value);
  }

  // Modifiers

  const FormTitle = classNames({
    [styles['login-form__title']]: true,
    [styles['login-form__title--error']]: !isNil(authErrors),
  });

  return (
    <Formik
      initialValues={{ phone_number: '', password: '', user_type: type }}
      onSubmit={(values, actions) => {
        onSubmit(values);
      }}
      validationSchema={Yup.object().shape({
        phone_number: Yup.number().required(),
        password: Yup.string()
          .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#+?!@$%^&*-]).{8,}$/,
            'Incorrect password.',
          )
          .required('Can’t be blank.'),
      })}
      validate={(values) => {
        let errors = {};
        if (!isValidPhoneNumber(`+${values.phone_number}`)) {
          errors.phone_number = 'Incorrect phone number.';
        } else {
          errors = {};
        }

        return errors;
      }}
    >
      {(props) => {
        const {
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
        } = props;

        return (
          <form className={styles['login-form']} onSubmit={handleSubmit}>
            <p className={FormTitle}>
              <Text semibold size="h2" tagName="span">
                {t('loginTitle')}
              </Text>
            </p>
            {/*
            {!isNil(authErrors) && (
              <div className={styles['login-form__container-error']}>
                <ErrorMessage
                  type="error"
                  text="Incorrect National ID number or password. "
                />
              </div>
            )} */}

            <ContainerRow>
              <Field name="phone_number">
                {({ field, meta }) => {
                  return (
                    <FieldLabel
                      text="local number"
                      error={
                        errors.phone_number &&
                        touched.phone_number &&
                        errors.phone_number
                      }
                    >
                      <InputPhone
                        {...field}
                        onChange={(phone) => {
                          setFieldValue(field.name, phone);
                        }}
                        error={errors.phone_number && touched.phone_number}
                      />
                    </FieldLabel>
                  );
                }}
              </Field>
            </ContainerRow>
            <ContainerRow size="md">
              <Field name="password">
                {({ field, meta }) => {
                  return (
                    <FieldLabel
                      text="password"
                      error={
                        errors.password && touched.password && errors.password
                      }
                    >
                      <Input
                        {...field}
                        type="password"
                        error={errors.password && touched.password}
                      />
                    </FieldLabel>
                  );
                }}
              </Field>
            </ContainerRow>
            <ContainerRow size="md">
              <CheckboxText
                checked={value}
                onClick={handleRememberUser}
                text={t('loginCheckboxText')}
              />
            </ContainerRow>
            <ContainerRow size="md">
              <Button
                type="submit"
                medium
                width="full"
                height="lg"
                color="third"
              >
                {t('loginButtonButtonText1')}
              </Button>
            </ContainerRow>
            <div className={styles['login-form__container-link']}>
              <CustomLink medium color="third">
                {t('loginButtonButtonText2')}
              </CustomLink>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default withTranslation('login')(LoginForm);

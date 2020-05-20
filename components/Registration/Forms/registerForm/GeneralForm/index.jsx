import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export default function RegisterSchema(t) {
  return Yup.object({
    password: Yup.string()
      .min(8, 'Password must contain at least 8 characters.')
      .required(t('validation.required')),
    repeatPassword: Yup.string()
      .min(8, 'Password must contain at least 8 characters.')
      .required(t('validation.required'))
      .test('passwords-match', 'Passwords must match ya fool', function (
        value,
      ) {
        return this.parent.password === value;
      }),
    phoneNumber: Yup.string().required(t('validation.required')),
    saveUser: Yup.bool().oneOf([true], 'Keep me logged in'),
    terms: Yup.bool().oneOf([true], 'Terms of Use'),
  });
}

RegisterSchema.propTypes = {
  t: PropTypes.func,
};

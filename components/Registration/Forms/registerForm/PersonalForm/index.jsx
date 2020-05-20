import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export default function RegisterSchema(t) {
  return Yup.object({
    firstName: Yup.string().required(t('validation.required')),
    lastName: Yup.string().required(t('validation.required')),
    nationalId: Yup.string()
      .max(11, t('validation.length11'))
      .required(t('validation.required')),
    dateOfBirth: Yup.string().required(t('validation.required')),
    gender: Yup.string().required(t('validation.required')),
    country: Yup.string().required(t('validation.required')),
    city: Yup.string().required(t('validation.required')),
    direction: Yup.string().required(t('validation.required')),
    houseNumber: Yup.string()
      .max(5, t('validation.length5'))
      .required(t('validation.required')),
    apartmentNumber: Yup.string()
      .max(5, t('validation.length5'))
      .required(t('validation.required')),
    floor: Yup.number()
      .max(999, t('validation.length3'))
      .required(t('validation.required')),
    zipCode: Yup.string()
      .max(4, t('validation.length4'))
      .required(t('validation.required')),
    email: Yup.string().email().required(t('validation.required')),
  });
}

RegisterSchema.propTypes = {
  t: PropTypes.func,
};

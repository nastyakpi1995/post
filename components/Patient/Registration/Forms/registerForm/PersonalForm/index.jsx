import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export default function RegisterSchema(t) {
  return Yup.object({
    firstName: Yup.string().required(t('validation.required')),
    lastName: Yup.string().required(t('validation.required')),
    nationalId: Yup.string().required(t('validation.required')),
    dateOfBirth: Yup.string().required(t('validation.required')),
    gender: Yup.string().required(t('validation.required')),
    country: Yup.string().required(t('validation.required')),
    city: Yup.string().required(t('validation.required')),
    direction: Yup.string().required(t('validation.required')),
    houseNumber: Yup.string().required(t('validation.required')),
    apartmentNumber: Yup.number(),
    floorNumber: Yup.number(),
    zipCode: Yup.number().required(t('validation.required')),
    email: Yup.string().email().required(t('validation.required')),
  });
}

RegisterSchema.propTypes = {
  t: PropTypes.func,
};

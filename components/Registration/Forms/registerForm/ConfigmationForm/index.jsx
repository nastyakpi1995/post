import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export default function RegisterConfirmSchema(t) {
  return Yup.object({
    confirmCode: Yup.string().required(t('validation.required')),
  });
}

RegisterConfirmSchema.propTypes = {
  t: PropTypes.func,
};

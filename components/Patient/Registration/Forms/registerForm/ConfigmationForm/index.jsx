import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export default function RegisterConfirmSchema(t) {
  return Yup.object({
    confirmCode: Yup.string()
      .test('confirmCode', t('validation.exactly8'), (val) => val.length === 6)
      .required(t('validation.required')),
  });
}

RegisterConfirmSchema.propTypes = {
  t: PropTypes.func,
};

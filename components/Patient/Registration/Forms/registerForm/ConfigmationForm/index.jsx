import React from 'react';
import * as Yup from 'yup';
import PropTypes from "prop-types";

export default function RegisterSchema(t) {
    return Yup.object({
        confirmCode: Yup.string()
            .test('confirmCode', t('validation.exactly8'), (val) => val.length === 8)
            .required(t('validation.required')),
    });
}

RegisterSchema.propTypes = {
    t: PropTypes.func,
};

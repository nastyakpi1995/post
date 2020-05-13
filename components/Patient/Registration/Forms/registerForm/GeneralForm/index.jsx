import React from 'react';
import * as Yup from 'yup';
import PropTypes from "prop-types";

export default function RegisterSchema(t) {
    return Yup.object({
        password: Yup.string()
            .max(15, t('validation.length15'))
            .required(t('validation.required')),
        repeatPassword: Yup.string()
            .max(15, t('validation.length15'))
            .required(t('validation.required')),
        phoneNumber: Yup.number()
            .required(t('validation.required'))
            .moreThan(0, t('validation.noNegative')),
        saveUser: Yup.bool().oneOf([true], 'Keep me logged in'),
        terms: Yup.bool().oneOf([true], 'Terms of Use'),
    });
}

RegisterSchema.propTypes = {
    t: PropTypes.func,
};

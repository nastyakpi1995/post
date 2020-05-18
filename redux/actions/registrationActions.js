import * as REGISTRATION_TYPES from '../types/registrationTypes';

export function requestGeneralInfo(payload) {
  return {
    type: REGISTRATION_TYPES.GENERAL_INFO_REQUEST,
    payload,
  };
}
export function successGeneralInfo(payload) {
  return {
    type: REGISTRATION_TYPES.GENERAL_INFO_SUCCESS,
    payload,
  };
}
export function errorGeneralInfo(payload) {
  return {
    type: REGISTRATION_TYPES.GENERAL_INFO_FAIL,
    payload,
  };
}

export function requestConfirmation(payload) {
  return {
    type: REGISTRATION_TYPES.CONFIRMATION_REQUEST,
    payload,
  };
}

export function successConfirmation(payload) {
  return {
    type: REGISTRATION_TYPES.CONFIRMATION_SUCCESS,
    payload,
  };
}
export function errorConfirmation(data) {
  return {
    type: REGISTRATION_TYPES.CONFIRMATION_FAIL,
    data,
  };
}

export function requestPersonalInfo(payload) {
  return {
    type: REGISTRATION_TYPES.PERSONAL_INFO_REQUEST,
    payload,
  };
}

export function successPersonalInfo(payload) {
  return {
    type: REGISTRATION_TYPES.PERSONAL_INFO_SUCCESS,
    payload,
  };
}
export function errorPersonalInfo(payload) {
  return {
    type: REGISTRATION_TYPES.PERSONAL_INFO_FAIL,
    payload,
  };
}

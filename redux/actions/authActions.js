import * as AUTH_TYPES from '../types/authTypes';

export const login = (payload) => {
  return {
    type: AUTH_TYPES.LOGIN_REQUEST,
    payload,
  };
};

export const clearLoginError = () => {
  return {
    type: AUTH_TYPES.CLEAR_LOGIN_ERROR,
  };
};

export const logout = (payload) => {};

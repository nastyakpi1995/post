import * as USER_TYPES from '../types/userTypes';

// eslint-disable-next-line import/prefer-default-export
export default function getUser(payload) {
  return {
    type: USER_TYPES.GET_USER_REQUEST,
    payload,
  };
}

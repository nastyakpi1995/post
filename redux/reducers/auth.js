import * as AUTH_TYPES from '../types/authTypes';

const defaultState = { isFetching: false, user: {}, authErrors: {} };

// -------- Reducer --------

export default function (state, action) {
  if (!state) return defaultState;

  switch (action.type) {
    case AUTH_TYPES.LOGIN_REQUEST: {
      return { ...state, isFetching: true, authErrors: {} };
    }

    case AUTH_TYPES.LOGIN_SUCCESS: {
      return { ...state, isFetching: false, user: action.payload };
    }

    case AUTH_TYPES.LOGIN_FAIL: {
      return { ...state, authErrors: action.payload };
    }

    case AUTH_TYPES.CLEAR_LOGIN_ERROR: {
      return { ...state, authErrors: {} };
    }

    default: {
      return state;
    }
  }
}

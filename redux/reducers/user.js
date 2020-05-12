import * as USER_TYPES from '../types/userTypes';

const defaultState = { user: {} };

// -------- Reducer --------

export default function (state, action) {
  if (!state) return defaultState;

  switch (action.type) {
    case USER_TYPES.GET_USER_SUCCESS: {
      return { ...state, user: action.payload };
    }

    default: {
      return state;
    }
  }
}

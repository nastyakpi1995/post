import types from './types';

const initialState = {};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case types.auth:
      return {
        isLoading: actions.loading,
        isLoggedIn: actions.logged,
      };
    default:
      return state;
  }
};

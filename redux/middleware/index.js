import createActionType from '../utils/createActionType';
import fetch from '../../utils/fetch';

// eslint-disable-next-line consistent-return
export default (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store);
  }

  next(action);

  async function handler() {
    const { after, token, type, ...config } = action;
    let result = null;
    try {
      result = await fetch(config, after, token);
      store.dispatch({
        type: createActionType(type),
        payload: result,
      });
    } catch (error) {
      switch (error.status) {
        case 400: {
          break;
        }

        case 401: {
          break;
        }

        case 404: {
          break;
        }

        default: {
          throw error;
        }
      }
    }
    return result;
  }

  if (/.+_\$NETWORK$/.test(action.type)) {
    return handler();
  }
};

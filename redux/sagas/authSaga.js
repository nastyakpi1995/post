import { put, call, takeEvery } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import * as AUTH_TYPES from '../types/authTypes';

// Utils

import redirectTo from '../../utils/redirect';

// Constants

import { TOKEN_NAME, redirect } from '../../constants/system';

import { loginApi } from '../../api/auth';

function* login({ payload }) {
  try {
    const res = yield call(loginApi, payload);

    const getValueStorage = localStorage.getItem('isRememberUser');
    const isRememberUser = getValueStorage === 'true';

    Cookies.set(TOKEN_NAME, res.token, isRememberUser && { expires: 3 });
    redirectTo(redirect.AUTH);
    yield put({
      type: AUTH_TYPES.LOGIN_SUCCESS,
      payload: res.user,
    });
  } catch (error) {
    console.log('error', error.data);
  }
}

export default function* authSaga() {
  yield takeEvery(AUTH_TYPES.LOGIN_REQUEST, login);
}

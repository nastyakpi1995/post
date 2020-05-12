import { put, call, takeEvery } from 'redux-saga/effects';
import * as USER_TYPES from '../types/userTypes';

import { getUserApi } from '../../api/user';

function* getUserSaga() {
  try {
    const res = yield call(getUserApi);
    yield put({
      type: USER_TYPES.GET_USER_SUCCESS,
      payload: res,
    });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export default function* userSaga() {
  yield takeEvery(USER_TYPES.GET_USER_REQUEST, getUserSaga);
}

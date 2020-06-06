import {put, call, takeEvery} from 'redux-saga/effects';
import FETCH_TYPES from '../types';

import {userDelete, userList} from '../../api/index';

function* getUserSaga(id) {
  try {
    yield call(() => userDelete(id.id));
    const users = yield call(() => userList());

    yield put({
      type: FETCH_TYPES.DELETE_SUCCESS,
      data: users,
    });

  } catch (e) {
    yield put({
      type: FETCH_TYPES.DELETE_FAIL, data: e.trace,
    });
  }
}

export default function* deleteRequest() {
  yield takeEvery(FETCH_TYPES.DELETE_REQUEST, getUserSaga);
}

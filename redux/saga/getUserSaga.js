import {takeEvery, put, call} from 'redux-saga/effects';
import FETCH_TYPES from '../types';

import {userList} from '../../api/index';

function* getUserSaga() {
  try {
    const res = yield call(userList);

    yield put({
      type: FETCH_TYPES.GET_SUCCESS,
      data: res,
    });
  } catch (e) {
    yield put({
      type: FETCH_TYPES.GET_FAIL,
      data: e.detail,
    });
  }
}

export default function* getRequest() {
  yield takeEvery(FETCH_TYPES.GET_REQUEST, getUserSaga);
}

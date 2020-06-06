import {put, call, takeEvery} from 'redux-saga/effects';
import FETCH_TYPES from '../types';

import { userPut, userList } from '../../api/index';

function* getUserSaga(data) {
  try {
    yield call(() => userPut(data.id, data.data));
    const users = yield call(() => userList());

    yield put({
      type: FETCH_TYPES.PUT_SUCCESS,
      data: users,
    });
  } catch (e) {
    yield put({type: FETCH_TYPES.PUT_FAIL, data: e.errors});
  }
}

export default function* putRequest() {
  yield takeEvery(FETCH_TYPES.PUT_REQUEST, getUserSaga);
}

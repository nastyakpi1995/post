import { all, fork } from 'redux-saga/effects';

import userSaga from './userSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(authSaga)]);
}

import { all, fork } from 'redux-saga/effects';

import authSaga from './authSaga';
import {
  generalInfoSaga,
  personalInfoSaga,
  confirmationSaga,
} from './registrationSaga';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(generalInfoSaga),
    fork(personalInfoSaga),
    fork(confirmationSaga),
  ]);
}

import {all, fork} from 'redux-saga/effects';
import getRequest from './getUserSaga';
import postRequest from './postUserSaga';
import deleteRequest from './deleteRequest';
import putRequest from './putRequest';

export default function* rootSaga() {
  yield all([
    fork(getRequest),
    fork(postRequest),
    fork(deleteRequest),
    fork(putRequest),
  ]);
}

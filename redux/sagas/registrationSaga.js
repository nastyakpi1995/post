import { put, call, takeEvery } from 'redux-saga/effects';
import { toSnake, toCamel } from 'convert-keys';
import {
  sendGeneralInfo,
  sendPersonalInfo,
  sendConfirmationInfo,
} from 'api/registration';
import * as registrationActions from '../actions/registrationActions';
import * as REGISTRATION_TYPES from '../types/registrationTypes';

function* requestGeneralInfo(data) {
  try {
    const updatedData = {
      ...data.payload,
      confirmPassword: data.payload.repeatPassword,
    };
    delete updatedData.password;
    delete updatedData.repeatPassword;
    const requestData = toSnake(updatedData);
    requestData.password1 = data.payload.password;
    const res = yield call(sendGeneralInfo, requestData);
    sessionStorage.setItem('token', res.token);
    yield put(registrationActions.successConfirmation(res));
  } catch (e) {
    const updatedData = toCamel(e);
    yield put(registrationActions.errorConfirmation(updatedData));
  }
}

function* requestPersonalInfo(data) {
  try {
    const requestData = toSnake(data.payload);
    yield call(sendPersonalInfo, requestData);
    yield put(registrationActions.successPersonalInfo(requestData));
  } catch (e) {
    const updatedData = toCamel(e);
    yield put(registrationActions.errorPersonalInfo(updatedData));
  }
}

function* requestConfirmationCode(data) {
  try {
    const requestData = toSnake(data.payload);
    requestData.confirm_password = data.payload.repeatPassword;
    requestData.password1 = data.payload.password;
    delete requestData.password;
    delete requestData.repeat_password;
    yield call(sendConfirmationInfo, requestData);
    yield put(registrationActions.successGeneralInfo(data.payload));
  } catch (e) {
    const updatedData = toCamel(e);
    yield put(registrationActions.errorGeneralInfo(updatedData));
  }
}

export function* generalInfoSaga() {
  yield takeEvery(REGISTRATION_TYPES.GENERAL_INFO_REQUEST, requestGeneralInfo);
}

export function* personalInfoSaga() {
  yield takeEvery(
    REGISTRATION_TYPES.PERSONAL_INFO_REQUEST,
    requestPersonalInfo,
  );
}

export function* confirmationSaga() {
  yield takeEvery(
    REGISTRATION_TYPES.CONFIRMATION_REQUEST,
    requestConfirmationCode,
  );
}

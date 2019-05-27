import { takeLatest, all } from 'redux-saga/effects';

import * as types from './actions';
import submitForm from './submitForm';

export default function* rootSaga(){
  yield all([
    takeLatest(types.SUBMIT_FORM_START, submitForm),
  ])
}

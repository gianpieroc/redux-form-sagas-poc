import { call, put, select } from "redux-saga/effects";
import { delay } from "redux-saga";
import { startSubmit, stopSubmit, reset } from "redux-form";
import { submitFormSuccess, submitFormFail } from "./actions";

export default function* create({ payload }) {
  const formId = "user";
  try {
    //Handle business logic
    yield put(startSubmit(formId));
    yield delay(3000);
    // throw new Error("PERONISTA CHAVISTA");
    yield put(submitFormSuccess());
    yield put(reset(formId));
    yield put(stopSubmit(formId));
  } catch (e) {
    yield put(submitFormFail(e));
    yield put(stopSubmit(formId, { _error: e.message }));
  }
}

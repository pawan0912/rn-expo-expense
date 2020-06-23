import { put, takeLatest, all } from "redux-saga/effects";

import actionTypes from "../action/type";

const L = "_LOADING";
const F = "_FAIL";

function* fetchExpense() {
  try {
    yield put({
      type: actionTypes.SET_EXPENSE + L,
    });
    const expenseApiData = yield fetch(
      "https://run.mocky.io/v3/2d7acdd7-cf46-4659-a6b3-c0a65f1ec439"
    ).then((response) => response.json());
    yield put({
      type: actionTypes.SET_EXPENSE,
      payload: { expense: expenseApiData },
    });
  } catch (error) {
    yield put({
      type: actionTypes.SET_EXPENSE + F,
      error: error,
    });
  }
}

export function* watchFetchExpense() {
  yield takeLatest(actionTypes.GET_EXPENSE, fetchExpense);
}

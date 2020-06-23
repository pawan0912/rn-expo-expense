import { all, fork } from "redux-saga/effects";

import { watchFetchExpense } from "./expenseSaga";

export function* rootSaga() {
  yield all([watchFetchExpense()]);
}

import actionTypes from "./type";

const L = "_LOADING";
const F = "_FAIL";

export const getExpense = () => ({
  type: actionTypes.GET_EXPENSE,
});

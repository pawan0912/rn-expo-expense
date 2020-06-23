import actionTypes from "../action/type";

const L = "_LOADING";
const F = "_FAIL";

const initialState = {
  ld_expense: false,

  er_expense: null,

  expense: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_EXPENSE + L:
      return { ...state, ld_expense: true, er_expense: null };
    case actionTypes.GET_EXPENSE:
      return {
        ...state,
        ld_expense: false,
        er_expense: null,
      };
    case actionTypes.GET_EXPENSE + F:
      return {
        ...state,
        ld_expense: false,
        er_expense: action.error,
      };

    case actionTypes.SET_EXPENSE + L:
      return { ...state, ld_expense: true, er_expense: null };
    case actionTypes.SET_EXPENSE:
      const { expense } = action.payload;
      return {
        ...state,
        ld_expense: false,
        er_expense: null,
        expense: { ...expense },
      };
    case actionTypes.SET_EXPENSE + F:
      return {
        ...state,
        ld_expense: false,
        er_expense: action.error,
      };
    default:
      return state;
  }
};

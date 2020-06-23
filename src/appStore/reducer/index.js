import { combineReducers } from "redux";
import expenseState from "./expenseReducer";

const rootReducer = combineReducers({ expenseState });

export default rootReducer;

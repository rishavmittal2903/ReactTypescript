import uuid from "uuid";
import { IExpense } from "../Interfaces/IExpense";
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SET_EXPENSES
} from "../types/ExpenseActionType";
import {AppActions} from "../types/AppAction"
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";

export const addExpense = (expense: IExpense): AppActions => ({
  type: ADD_EXPENSE,
  expense
});

export const removeExpense = (id: string): AppActions => ({
  type: REMOVE_EXPENSE,
  id
});

export const editExpense = (expense: IExpense): AppActions => ({
  type: EDIT_EXPENSE,
  expense
});

export const setExpenses = (expenses: IExpense[]): AppActions => ({
  type: SET_EXPENSES,
  expenses
});

export const startAddExpense = (expenseData: IExpense) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    return dispatch(addExpense(expenseData)
    );
  };
};

export const startRemoveExpense = (id: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeExpense(id));
  };
};

export const startEditExpense = (expense: IExpense) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(editExpense(expense));
  };
};

export const startSetExpenses = (expenses: IExpense[]) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setExpenses(expenses));
  };
};

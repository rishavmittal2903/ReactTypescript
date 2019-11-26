import { IExpense } from "../Interfaces/IExpense";
import { ExpenseActionTypes } from "../types/ExpenseActionType";

const expensesReducerDefaultState: IExpense[] = [
  {
    id:"1",
    description: "test",
    note: "test1",
    amount: 120,
    createdAt: 100
  }
];

const expenseReducer = (
  state = expensesReducerDefaultState,
  action: ExpenseActionTypes
): IExpense[] => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.expense.id) {
          return {
            ...expense,
            ...action.expense
          };
        } else {
          return expense;
        }
      });
    case "SET_EXPENSES":
      return action.expenses;
    default:
      return state;
  }
};

export { expenseReducer };

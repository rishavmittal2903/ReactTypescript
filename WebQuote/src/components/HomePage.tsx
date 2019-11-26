import React from "react";
import { connect } from "react-redux";
import { startRemoveExpense, startEditExpense,startAddExpense } from "../actions/ExpenseAction";
import { IExpense } from "../Interfaces/IExpense";
import { AppState } from "../store/configureStore";
import { Dispatch, bindActionCreators } from "redux";
import { AppActions } from "../types/AppAction";
import { ThunkDispatch } from "redux-thunk";

type Props = LinkStateProps & LinkDispatchProps;

export class HomePagePage extends React.Component<Props> {
  onEdit = (expense: IExpense) => {
    this.props.startEditExpense(expense);
  };
  onRemove = (id: string) => {
    this.props.startRemoveExpense(id);
  };
  onAdd=()=>{
    let defaultProps:IExpense={
      id:"2",
      description: "test",
      note: "test1111",
      amount: 500,
      createdAt: 12
    }
    this.props.startAddExpense(defaultProps);
  }
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <h1>Expense Page</h1>
        <div>
          {expenses.map(expense => (
            <div>
              <p>{expense.description}</p>
              <p>{expense.amount}</p>
              <p>{expense.note}</p>
              <button onClick={() => this.onRemove(expense.id)}>
                Remove Expense
              </button>
              <button onClick={() => this.onEdit(expense)}>Edit Expense</button>
              <button onClick={() => this.onAdd()}>Add Expense</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

interface LinkStateProps {
  expenses: IExpense[];
}
interface LinkDispatchProps {
  startEditExpense: (expense: IExpense) => void;
  startRemoveExpense: (id: string) => void;
  startAddExpense:(expense:IExpense)=>void;
}

const mapStateToProps = (
  state: AppState
): LinkStateProps => ({
  expenses: state.expenses
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
  startEditExpense: bindActionCreators(startEditExpense, dispatch),
  startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch),
  startAddExpense: bindActionCreators(startAddExpense, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePagePage);

import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-mobile">Expenses</div>
      <div className="show-desktop">Expense</div>
      <div className="show-desktop">Amount</div>
    </div>

    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item--msg">
          <span>No expenses</span>
        </div>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);

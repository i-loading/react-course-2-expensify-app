import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "./../../components/AddPage";
import expense from "../fixtures/expense";

let startAddExpense, history, wrapper;
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} history={history} />
  );
});

test("Should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expense[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpense).toHaveBeenLastCalledWith(expense[1]);
});

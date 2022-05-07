import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditPage";
import expense from "../fixtures/expense";

let startEditExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expense[1]}
    />
  );
});

test("Should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle startEditExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expense[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startEditExpense).toHaveBeenLastCalledWith(expense[1].id, expense[1]);
});

test("Should handle startRemoveExpense", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense[1].id });
});

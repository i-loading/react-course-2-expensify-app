import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "./../../components/ExpenseList";
import expense from "../fixtures/expense";

test("Should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expense} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseList with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

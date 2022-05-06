import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "./../../components/ExpenseListItem";
import expense from "../fixtures/expense";

test("Should render correct ExpenseListItem component with fixture data", () => {
  const wrapper = shallow(<ExpenseListItem {...expense[0]} />);
  expect(wrapper).toMatchSnapshot();
});

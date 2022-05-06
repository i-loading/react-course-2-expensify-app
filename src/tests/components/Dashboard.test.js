import React from "react";
import { shallow } from "enzyme";
import DashboardExpensePage from "./../../components/Dashboard";

test("Should render correct Dashboard page", () => {
  const wrapper = shallow(<DashboardExpensePage />);
  expect(wrapper).toMatchSnapshot();
});

import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "./../../components/NotFoundPage";

test("Should render correct NotFound page", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});

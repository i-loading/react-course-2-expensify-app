import moment from "moment";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "./../../actions/filters";

test("should generate text filter action object with provided values", () => {
  const action = setTextFilter("text");
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "text" });
});

test("should generate text filter action object with default values", () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});

test("should generate sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("should generate sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: "SORT_BY_DATE" });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ type: "SET_END_DATE", endDate: moment(0) });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ type: "SET_END_DATE", endDate: moment(0) });
});

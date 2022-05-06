import selectExpensesTotal from "./../../selectors/expenses-total";
import expense from "../fixtures/expense";

test("should return 0 if no expenses", () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test("should should correctly add up a single expense", () => {
  const res = selectExpensesTotal([expense[0]]);
  expect(res).toBe(195);
});

test("should should correctly add up a multiple expense", () => {
  const res = selectExpensesTotal(expense);
  expect(res).toBe(114195);
});

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
} from "./../../actions/expenses";
import expense from "../fixtures/expense";
import db from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expense.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  db.ref("expenses")
    .set(expensesData)
    .then(() => done());
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 100,
    createdAt: 1000,
    note: "new note",
  };
  const action = addExpense(expense[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expense[2],
  });
});

test("should setup add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000,
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: { id: expect.any(String), ...expenseData },
    });

    return db
      .ref(`expenses/${actions[0].expense.id}`)
      .once("value")
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });
});

test("should setup add expense with defaults to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0,
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: { id: expect.any(String), ...expenseData },
    });

    return db
      .ref(`expenses/${actions[0].expense.id}`)
      .once("value")
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });
});

test("Should setup set expense action object with data", () => {
  const action = setExpenses(expense);
  expect(action).toEqual({ type: "SET_EXPENSES", expense });
});

test("Should fetch expenses from firebase", (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "SET_EXPENSES", expense });
    done();
  });
});

// test("should setup remove expense action object", () => {
//   const action = removeExpense({ id: "123abc" });
//   expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123abc" });
// });

// test("should setup edit expense action object", () => {
//   const action = editExpense("123", { note: "New note" });
//   expect(action).toEqual({
//     type: "EDIT_EXPENSE",
//     id: "123",
//     updates: { note: "New note" },
//   });
// });

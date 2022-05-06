import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const DashboardExpensePage = () => (
  <div>
    <p>Home page</p>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardExpensePage;

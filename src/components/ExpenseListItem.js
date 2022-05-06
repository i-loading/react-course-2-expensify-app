import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h4>
        <i>{description}</i>
      </h4>
    </Link>
    <p>Amount: {amount}</p>
    <p>Created at: {createdAt}</p>
  </div>
);

export default ExpenseListItem;

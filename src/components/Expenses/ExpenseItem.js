import React from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-description">
          <h2>{props.title}</h2>
          <p className="expense-description__amount">${props.amount}</p>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

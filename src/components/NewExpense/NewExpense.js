import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  // receive and save new expense data from ExpenseForm component
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);

    props.onAddExpense(expenseData);
  };

  const clickHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="submit" className="show-form-btn" onClick={clickHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;

import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  // setting up State hook to store and update form inputs
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* Alternate way to use useState() here:
	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});
	*/

  // trigger functions to store form fields' entered values
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /* Alternate way to use useState() here:
		setUserInput({
			...userInput,
			enteredTitle: event.target.value,
		});
		*/

    /* Updating state that depends on the previous state:
		setUserInput((prevState) => {
			...prevState,
			enteredTitle: event.target.value,
		});
		*/
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Save form inputs
    const expenseData = {
      id: Math.random(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);

    // pass the expense data up to NewExpense component
    props.onSaveExpenseData(expenseData);

    // clear form input fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__btns">
          <button type="button" onClick={props.onStopEditing}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;

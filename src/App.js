import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { id: "el1", date: new Date(2022, 1, 23), title: "New Desk", amount: 250 },
  {
    id: "el2",
    date: new Date(2022, 2, 2),
    title: "Car Insurance",
    amount: 130.59,
  },
  {
    id: "el3",
    date: new Date(2022, 2, 13),
    title: "Cell Phone",
    amount: 56.65,
  },
  { id: "el4", date: new Date(2021, 11, 6), title: "Internet", amount: 70 },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //console.log("In App.js");
    //console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

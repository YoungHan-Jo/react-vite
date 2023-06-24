import React, { useState } from 'react';

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    date: new Date(2021, 1, 28),
    title: 'Toilet Paper',
    amount: 111,
  },
  {
    id: 'e2',
    date: new Date(2022, 2, 28),
    title: 'Car Insurance',
    amount: 222,
  },
  {
    id: 'e3',
    date: new Date(2023, 3, 28),
    title: 'House Insurance',
    amount: 333,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      // 以前のsnapshotを使うときは、callback functionを使うこと！
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;

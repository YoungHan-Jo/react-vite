import React from 'react';

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
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
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

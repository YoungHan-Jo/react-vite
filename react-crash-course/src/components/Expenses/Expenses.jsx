import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map(item => {
        return (
          <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;

import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpeseData => {
    const expenseData = {
      ...enteredExpeseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          add new expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

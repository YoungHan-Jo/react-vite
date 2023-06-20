import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
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
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
    </div>
  );
}

export default App;

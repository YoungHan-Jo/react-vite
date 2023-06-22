import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses({ items }) {
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
}

export default Expenses;

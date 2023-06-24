import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
  // Reactは最初にDOMレンダリングをしてから二回目はレンダリングしない。
  // しかし、useStateを使って状態を変更すると、そのコンポーネント関数を再実行する。
  // Reactフックは関数型コンポーネントに直接使わなければならない。
  // 全てのstateは独立的である。
  // const [title, setTitle] = useState(props.title); // 初期化は最初一回だけ行われる。// stateが変わった時は、初期化しない。
  // const clickHandler = () => {
  //   setTitle('Updated!'); // これを呼び出すと、Reactはこのコンポーネントを再実行する。
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;

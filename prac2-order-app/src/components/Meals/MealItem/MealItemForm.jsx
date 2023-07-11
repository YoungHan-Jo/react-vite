import React, { useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input/Input';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CartAtom } from '../../../recoil/CartAtom';

const MealItemForm = ({ item }) => {
  const carts = useRecoilValue(CartAtom);
  const setCarts = useSetRecoilState(CartAtom);
  // const [amount, setAmount] = useState('1');

  const addCartHandler = event => {
    event.preventDefault();
    console.log(carts);
    console.log(item);
    const amount = event.target[0].value;
    const exsistCart = carts.filter(cart => cart.id === item.id);
    if (exsistCart.length > 0) {
      setCarts(prevCarts => [
        ...prevCarts.filter(cart => cart.id !== item.id),
        {
          id: exsistCart[0].id,
          name: exsistCart[0].name,
          amount: exsistCart[0].amount + parseInt(amount),
          price: exsistCart[0].price,
        },
      ]);
    } else {
      setCarts(prevCarts => [
        ...prevCarts,
        {
          id: item.id,
          name: item.name,
          amount: +amount,
          price: item.price,
        },
      ]);
    }
  };

  return (
    <form className={classes.form} onSubmit={addCartHandler}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + item.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;

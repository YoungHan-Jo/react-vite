import React from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ShowCartModalAtom } from '../../recoil/ShowCartModalAtom';
import { CartAtom, CartTotalSelector } from '../../recoil/CartAtom';
import CartItem from './CartItem';

const Cart = () => {
  const setShowCartModal = useSetRecoilState(ShowCartModalAtom);
  const cartTotalAmount = useRecoilValue(CartTotalSelector);
  const carts = useRecoilValue(CartAtom);

  const closeCartModalHandler = () => {
    setShowCartModal({ isShow: false });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {carts.map(cart => {
        return <CartItem key={cart.id} {...cart} />;
      })}
    </ul>
  );

  return (
    <Modal onClose={closeCartModalHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartTotalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={closeCartModalHandler}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

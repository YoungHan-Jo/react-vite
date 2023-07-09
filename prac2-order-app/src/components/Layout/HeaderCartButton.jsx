import React from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useSetRecoilState } from 'recoil';
import { ShowCartModalAtom } from '../../recoil/ShowCartModalAtom';

const HeaderCartButton = () => {
  const setShowCartModal = useSetRecoilState(ShowCartModalAtom);

  const showCartHandler = () => {
    setShowCartModal({ isShow: true });
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
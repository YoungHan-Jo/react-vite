import React from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ShowCartModalAtom } from '../../recoil/ShowCartModalAtom';
import { CartCountSelector } from '../../recoil/CartAtom';

const HeaderCartButton = () => {
  const setShowCartModal = useSetRecoilState(ShowCartModalAtom);
  const cartCount = useRecoilValue(CartCountSelector);

  const showCartHandler = () => {
    setShowCartModal({ isShow: true });
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default HeaderCartButton;

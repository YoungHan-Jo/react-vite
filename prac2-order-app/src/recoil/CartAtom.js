import { atom, selector } from 'recoil';

export const CartAtom = atom({
  key: 'CartAtom',
  default: [],
});

export const CartCountSelector = selector({
  key: 'CartCountSelector',
  get: ({ get }) => {
    const carts = get(CartAtom);
    return carts.reduce((count, cart) => count + cart.amount, 0);
  },
});

export const CartTotalSelector = selector({
  key: 'CartTotalSelector',
  get: ({ get }) => {
    const carts = get(CartAtom);
    return carts.reduce((total, cart) => total + cart.price * cart.amount, 0);
  },
});

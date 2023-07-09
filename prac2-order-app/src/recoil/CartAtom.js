import { atom, selector } from 'recoil';

export const CartAtom = atom({
  key: 'CartAtom',
  default: [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }],
});

export const CartCountSelector = selector({
  key: 'CartCountSelector',
  get: ({ get }) => {
    const carts = get(CartAtom);
    return carts.length;
  },
});

export const CartTotalSelector = selector({
  key: 'CartTotalSelector',
  get: ({ get }) => {
    const carts = get(CartAtom);
    return carts.reduce((total, cart) => total + cart.price * cart.amount, 0);
  },
});

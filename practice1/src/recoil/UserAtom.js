import { atom, selector } from 'recoil';

export const UserAtom = atom({
  key: 'UserAtom',
  default: [],
});

export const userCountSelector = selector({
  key: 'userCountSelector',
  get: ({ get }) => {
    const users = get(UserAtom);
    return users.length;
  },
});

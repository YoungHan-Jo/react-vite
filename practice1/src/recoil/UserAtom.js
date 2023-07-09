import { atom, selector } from 'recoil';

export const UserAtom = atom({
  key: 'UserAtom',
  default: [],
});

export const UserCountSelector = selector({
  key: 'UserCountSelector',
  get: ({ get }) => {
    const users = get(UserAtom);
    return users.length;
  },
});

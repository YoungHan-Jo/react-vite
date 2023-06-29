import { atom, selector } from 'recoil';

const users = [
  {
    id: 'u1',
    name: 'Max',
    age: 30,
  },
  {
    id: 'u2',
    name: 'Kim',
    age: 31,
  },
];

export const UserAtom = atom({
  key: 'UserAtom',
  default: users,
});

export const userCountSelector = selector({
  key: 'userCountSelector',
  get: ({ get }) => {
    const users = get(UserAtom);
    return users.length;
  },
});

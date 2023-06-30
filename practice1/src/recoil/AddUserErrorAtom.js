import { atom } from 'recoil';

export const AddUserErrorAtom = atom({
  key: 'AddUserErrorAtom',
  default: { isWrong: false },
});

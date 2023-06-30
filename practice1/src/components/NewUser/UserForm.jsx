import React, { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { UserAtom } from '../../recoil/UserAtom';

import Button from '../UI/Button';
import { AddUserErrorAtom } from '../../recoil/AddUserErrorAtom';

const UserForm = () => {
  // 単純に、値を取るぐらいなら、useRefを使うと便利
  // refでアクセスすることを、Reactに制御されてないコンポーネントという
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const setUsers = useSetRecoilState(UserAtom);
  const setAddUserError = useSetRecoilState(AddUserErrorAtom);

  const addUserHandler = event => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setAddUserError({
        isWrong: true,
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setAddUserError({
        isWrong: true,
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    const user = {
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
    };
    setUsers(prev => {
      return [...prev, user];
    });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };
  return (
    <form onSubmit={addUserHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" ref={ageInputRef} />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;

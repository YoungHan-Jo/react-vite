import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { UserAtom } from '../../recoil/UserAtom';

import Button from '../UI/Button';
import { AddUserErrorAtom } from '../../recoil/AddUserErrorAtom';

const UserForm = () => {
  const setUsers = useSetRecoilState(UserAtom);
  const setAddUserError = useSetRecoilState(AddUserErrorAtom);

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const changeUsernameHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const changeAgeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = event => {
    event.preventDefault();

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
    setEnteredUsername('');
    setEnteredAge('');
  };
  return (
    <form onSubmit={addUserHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={enteredUsername}
          id="username"
          onChange={changeUsernameHandler}
        />
      </div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          value={enteredAge}
          id="age"
          onChange={changeAgeHandler}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;

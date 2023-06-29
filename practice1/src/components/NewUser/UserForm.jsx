import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserAtom } from '../../recoil/UserAtom';

const UserForm = () => {
  const setUsers = useSetRecoilState(UserAtom);
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const changeUsernameHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const changeAgeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
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
    <form onSubmit={submitHandler}>
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
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;

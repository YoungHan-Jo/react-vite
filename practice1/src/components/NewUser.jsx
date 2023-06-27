import React, { useState } from 'react';

const NewUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const changeUsernameHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const changeAgeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = event => {};

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={changeUsernameHandler} />
      </div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" onChange={changeAgeHandler} />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default NewUser;

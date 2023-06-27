import React, { useState } from 'react';

import NewUser from './components/NewUser';
import UsersList from './components/UsersList';
import './App.css';

function App() {
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

  const [currentUsers, setCurrentUsers] = useState(users);

  return (
    <>
      <NewUser />
      <UsersList users={currentUsers} />
    </>
  );
}

export default App;

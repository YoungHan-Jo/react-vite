import React, { useState } from 'react';

import NewUser from './components/NewUser/NewUser';
import UsersList from './components/Users/UsersList';
import './App.css';

function App() {
  return (
    <>
      <NewUser />
      <UsersList />
    </>
  );
}

export default App;

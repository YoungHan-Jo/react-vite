import React from 'react';

import './App.css';
import NewUser from './components/NewUser/NewUser';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <>
      <NewUser />
      <UsersList />
    </>
  );
}

export default App;

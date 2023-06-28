import React from 'react';

import Card from '../UI/Card';
import UserForm from './UserForm';

const NewUser = ({ onAddUser }) => {
  return (
    <Card>
      <UserForm onSubmit={onAddUser} />
    </Card>
  );
};

export default NewUser;

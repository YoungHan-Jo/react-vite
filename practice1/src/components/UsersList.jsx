import React from 'react';

import UserItem from './UserItem';
import Card from './UI/Card';

const UsersList = ({ users }) => {
  return (
    <Card>
      {users.map(user => {
        return <UserItem key={user.id} user={user} />;
      })}
    </Card>
  );
};

export default UsersList;

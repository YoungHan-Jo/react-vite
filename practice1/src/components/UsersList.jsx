import React from 'react';

import UserItem from './UserItem';

const UsersList = ({ users }) => {
  return (
    <div>
      {users.map(user => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UsersList;

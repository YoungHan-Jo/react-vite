import React from 'react';

const UserItem = ({ user }) => {
  return (
    <div>
      <h3>
        {user.name} ({user.age} years old)
      </h3>
    </div>
  );
};

export default UserItem;

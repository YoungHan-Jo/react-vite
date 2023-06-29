import React from 'react';

import { useRecoilValue } from 'recoil';
import { UserAtom, userCountSelector } from '../recoil/UserAtom';
import Card from './UI/Card';
import UserItem from './UserItem';

const UsersList = () => {
  const users = useRecoilValue(UserAtom);
  const userCount = useRecoilValue(userCountSelector);

  return (
    <Card>
      <div>
        <h2>Users Count : {userCount}</h2>
      </div>
      {users.map(user => {
        return <UserItem key={user.id} user={user} />;
      })}
    </Card>
  );
};

export default UsersList;

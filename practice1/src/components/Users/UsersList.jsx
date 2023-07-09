import React from 'react';

import { useRecoilValue } from 'recoil';
import { UserAtom, UserCountSelector } from '../../recoil/UserAtom';
import Card from '../UI/Card';
import UserItem from './UserItem';

import classes from './UsersList.module.css';

const UsersList = () => {
  const users = useRecoilValue(UserAtom);
  const userCount = useRecoilValue(UserCountSelector);

  return (
    <Card className={classes.users}>
      <div>
        <h2>Users Count : {userCount}</h2>
      </div>
      <ul>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

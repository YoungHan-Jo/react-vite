import React from 'react';

import classes from './UserItem.module.css';
import { useSetRecoilState } from 'recoil';
import { UserAtom } from '../../recoil/UserAtom';

const UserItem = ({ user }) => {
  const setUsers = useSetRecoilState(UserAtom);

  const clickDeleteHandler = event => {
    setUsers(prev => {
      const result = prev.filter(user => user.id !== event.currentTarget.id);
      return result;
    });
  };
  return (
    <li id={user.id} className={classes.userItem} onClick={clickDeleteHandler}>
      <h3>
        {user.name} ({user.age} years old)
      </h3>
    </li>
  );
};

export default UserItem;

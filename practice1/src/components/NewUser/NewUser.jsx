import React, { useState } from 'react';

import Card from '../UI/Card';
import UserForm from './UserForm';

import classes from './NewUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AddUserErrorAtom } from '../../recoil/AddUserErrorAtom';

const NewUser = () => {
  const addUserError = useRecoilValue(AddUserErrorAtom);
  const setAddUserError = useSetRecoilState(AddUserErrorAtom);

  const errorConfirmHandler = () => {
    setAddUserError({ isWrong: false });
  };

  return (
    <>
      {addUserError.isWrong && (
        <ErrorModal
          title={addUserError.title}
          message={addUserError.message}
          onConfirm={errorConfirmHandler}
        />
      )}
      <Card className={classes.input}>
        <UserForm />
      </Card>
    </>
  );
};

export default NewUser;

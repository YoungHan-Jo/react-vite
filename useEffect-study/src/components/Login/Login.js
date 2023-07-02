import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

// reducer functionは、componentの中で作られたどんなデータも要らないので、componentの外で作られる。
const emailReducer = (state, action) => {
  // このstateが、最新のstate
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'PASSWORD_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = props => {
  // =======useReducer使用　start=======
  const [formIsValid, setFormIsValid] = useState(false); // form有効性を他のstateから導出してるから、最新のstateじゃない可能性もある。＝＞ useEffectで解決できる。

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  // 最初のrenderの時は変わってと認識して、useEffectが実行される。
  useEffect(() => {
    const identifier = setTimeout(() => {
      // console.log('Checking form validity!');
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    // cleanup functionは、次のeffectが実行される前に実行される。
    return () => {
      // console.log('EFFECT CLEANUP');
      clearTimeout(identifier); // 直前のtimeoutをclearする。=> 最終的には、最後のtimeoutだけが実行される。
    };
  }, [emailState.isValid, passwordState.isValid]); // このdependency arrayが変わった時だけ実行される。
  // formIsValidは　emailStateとpasswordStateのisvalidだけ必要

  const emailChangeHandler = event => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value }); // dispatchは、action objectを受け取る。

    // setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
  };

  const passwordChangeHandler = event => {
    dispatchPassword({ type: 'PASSWORD_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid); // 他のstateを見て、stateを変更するのはやってはいけない。
    // 最新のstateを使うためfunction formを使おうとしても自分のstateしか使えない。=> この場合、useReducerを使えばいい。
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_BLUR' });
  };

  const submitHandler = event => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

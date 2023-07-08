import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

// forwardRefを使って、refを受け取れるようにする。
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // useImperativeHandleはできれば使わない方がいい。=> Inputのfocusなどは使ってもいい。
  // funcionを外部で使えるようにする。
  useImperativeHandle(ref, () => {
    return {
      focus: activate, // focusは、外部で使える名前
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;

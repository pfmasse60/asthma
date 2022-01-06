import React from 'react';
import Field from '../../Components/Field/Field.js';
import {formStyle, submitStyle} from './styles.js';



const Configure = ({onSubmit}) => {
  const firstnameRef = React.useRef();
  const lastnameRef = React.useRef();
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const passwordconfirmRef = React.useRef();
  const asmaRef = React.useRef();
  const handleSubmit = e => {
      e.preventDefault();
      const data = {
          firstname: firstnameRef.current.value,
          lastname: lastnameRef.current.value,
          username: usernameRef.current.value,
          password: passwordRef.current.value,
          passwordconfirm: passwordconfirmRef.current.value,
          asma: asmaRef.current.value
      };
      onSubmit(data);
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit} >
      <Field ref={firstnameRef} label="FirstName:" type="text" />
      <Field ref={lastnameRef} label="LastName:" type="text" />
      <Field ref={usernameRef} label="Username:" type="text" />
      <Field ref={passwordRef} label="Password:" type="password" />
      <Field ref={passwordconfirmRef} label="PasswordConfirm:" type="password" />
      <Field ref={asmaRef} label="Asma Index:" type="text" />
      
      <div>
        <button style={submitStyle} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Configure;
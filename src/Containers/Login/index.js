import React from 'react';
import {labelStyle, inputStyle, formStyle, submitStyle} from './styles.js';
import Field from '../../Components/Field/Field.js';

// const Field = React.forwardRef(({label, type}, ref) => {
//   return (
//     <div>
//       <label style={labelStyle} >{label}</label>
//       <input ref={ref} type={type} style={inputStyle} />
//     </div>
//   );
// });

const Login = ({onSubmit}) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = e => {
      e.preventDefault();
      const data = {
          username: usernameRef.current.value,
          password: passwordRef.current.value
      };
      onSubmit(data);
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit} >
      <Field ref={usernameRef} label="Username:" type="text" />
      <Field ref={passwordRef} label="Password:" type="password" />
      
      <div>
        <button style={submitStyle} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;
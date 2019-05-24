import React, {useState} from 'react';
import './Form.css';

const RegisterForm = ({onSubmit}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='app-form' onSubmit={(e) => {
      e.preventDefault();
      onSubmit({username, email, password});
    }}>
      <div className='input-div'>
        <label htmlFor='username'>Username</label>
        <input
          data-cy='register-username-input'
          id='username'
          placeholder='username'
          required
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className='input-div'>
        <label htmlFor='email'>Email</label>
        <input
          data-cy='register-email-input'
          id='email'
          type='email'
          placeholder='email'
          required
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className='input-div'>
        <label htmlFor='password'>Password</label>
        <input
          data-cy='register-password-input'
          id='password'
          placeholder='password'
          type='password'
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button data-cy='register-btn' className='form-button'>
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;

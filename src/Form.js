import React, {useState} from 'react';
import './Form.css';

const Form = ({onSubmit}) => {
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
          id='username'
          placeholder='username'
          required
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className='input-div'>
        <label htmlFor='email'>Email</label>
        <input
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
          id='password'
          placeholder='password'
          type='password'
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className='form-button'>
        Submit
      </button>
    </form>
  );
};

export default Form;

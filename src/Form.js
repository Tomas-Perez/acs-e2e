import React, {useState} from 'react';
import './Form.css';

const Form = ({onSubmit}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log({
        username,
        email,
        password
      });
    }}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          placeholder='username'
          required
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          placeholder='email'
          required
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          placeholder='password'
          type='password'
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button>
        Submit
      </button>
    </form>
  );
};

export default Form;

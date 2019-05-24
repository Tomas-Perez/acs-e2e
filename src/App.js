import React, {useState} from 'react';
import RegisterForm from './RegisterForm';
import './App.css'
import Content from "./Content";
import Modal from "./Modal";
import LoginForm from "./LoginForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const onRegisterSubmit = (user) => {
    setUsers([...users, user]);
    setUser(user);
  };
  const onLoginSubmit = ({email, password}) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setUser(user);
      setShowModal(false);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };
  const onLogin = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const onLogout = (e) => {
    e.preventDefault();
    setUser(null);
  };
  const onDismiss = () => {
    setShowModal(false);
    setLoginError(false);
  };

  return (
    <div>
      <Modal show={showModal} onDismiss={onDismiss}>
        <LoginForm onSubmit={onLoginSubmit} error={loginError}/>
      </Modal>
      <div className='app'>
        <header>
          <h1>Welcome to my Blog!</h1>
          <div className='session'>
            {
              user ?
                <button onClick={onLogout}>Logout</button> :
                <button onClick={onLogin}>Login</button>
            }
          </div>
        </header>
        <div className='content'>
          <Content/>
        </div>
        <div className='sidebar'>
          {
            user ?
              <div>
                <h2>{`Welcome ${user.username}`}</h2>
                <div className='blog-title'><h3>Lorem ipsum</h3></div>
                <div className='blog-title'><h3>Bacon ipsum</h3></div>
                <div className='blog-title'><h3>Enim sit amet</h3></div>
                <div className='blog-title'><h3>Ipsum cupim</h3></div>
                <div className='blog-title'><h3>Reprehenderit pastrami</h3></div>
                <div className='blog-title'><h3>Shankle pancetta</h3></div>
              </div> :
              <div>
                <h2>Join us</h2>
                <RegisterForm onSubmit={onRegisterSubmit}/>
              </div>
          }
          <div>
            <p>
              Spicy jalapeno bacon ipsum dolor amet pork belly meatball mollit jerky, ut hamburger et venison pork loin
              beef
              ribs beef adipisicing. Ipsum cupim filet mignon, ground round eu tenderloin turducken flank alcatra ut
              fatback
              shank turkey veniam. T-bone ex proident, pork loin meatloaf mollit tongue. Reprehenderit velit filet
              mignon
              shank, strip steak salami pork. Reprehenderit pastrami cupidatat, short loin chicken capicola elit
              porchetta
              flank id exercitation kevin pork belly.
            </p>
            <p>
              Elit ut frankfurter ea. Shankle pancetta rump et mollit. Est dolor shankle voluptate, burgdoggen enim
              reprehenderit nulla brisket. Aute culpa ea hamburger in shoulder. Ea ut consectetur in kielbasa porchetta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

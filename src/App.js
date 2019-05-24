import React, {useState} from 'react';
import Form from './Form';
import './App.css'
import Content from "./Content";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const onFormSubmit = (user) => {
    setUsers([...users, user]);
    setUser(user);
  };
  const onLogout = (e) => {
    e.preventDefault();
    setUser(null);
  };

  return (
    <div className='app'>
      <header>
        <h1>Welcome to my Blog!</h1>
        <div className='session'>
          {
            user?
              <button onClick={onLogout}>Logout</button> :
              <button>Login</button>
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
              <Form onSubmit={onFormSubmit}/>
            </div>
        }
        <div>
          <p>
            Spicy jalapeno bacon ipsum dolor amet pork belly meatball mollit jerky, ut hamburger et venison pork loin
            beef
            ribs beef adipisicing. Ipsum cupim filet mignon, ground round eu tenderloin turducken flank alcatra ut
            fatback
            shank turkey veniam. T-bone ex proident, pork loin meatloaf mollit tongue. Reprehenderit velit filet mignon
            shank, strip steak salami pork. Reprehenderit pastrami cupidatat, short loin chicken capicola elit porchetta
            flank id exercitation kevin pork belly.
          </p>
          <p>
            Elit ut frankfurter ea. Shankle pancetta rump et mollit. Est dolor shankle voluptate, burgdoggen enim
            reprehenderit nulla brisket. Aute culpa ea hamburger in shoulder. Ea ut consectetur in kielbasa porchetta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

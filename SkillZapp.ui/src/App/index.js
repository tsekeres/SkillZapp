import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null);
  // const [components, setComponents] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userObj) => {
      if (userObj) {
        userObj.getIdToken().then((token) => sessionStorage.setItem('token', token));
        const userInfoObj = {
          firstName: user.firstName,
          lastName: user.lastName,
          profilePicURL: user.profilePicURL,
          id: user.id,
          user: user.email.split('@')[0],
        };
        setUser(userInfoObj);
      } else setUser(false);
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes user={user} />
      </Router>
    </div>
  );
}

export default App;

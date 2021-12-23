/* eslint-disable arrow-body-style */
import firebase from 'firebase/app';
import axios from 'axios';
import addUser from './data/usersData';

axios.interceptors.request.use(
  (request) => {
    const token = sessionStorage.getItem('token');

    if (token != null) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((user) => {
      if (user.additionalUserInfo?.isNewUser) {
        const userInfoObj = {
          FirstName: user.user?.displayName.split(' ')[0],
          LastName: user.user?.displayName.split(' ')[1],
          profilePicURL: user.user?.photoURL,
          EmailAddress: user.user?.email,
        };
        addUser(userInfoObj);
      }
    });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };

import firebase from 'firebase/app';
import axios from 'axios';

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
  firebase.auth().signInWithPopup(provider).then((user) => {
      if (user.additionalUserInfo?.isNewUser) {
          const userInfoObj = {
            firstName: user.user?.firstName,
            lastName: user.user?.lastName,
            profileImage: user.user?.photoURL,
            uid: user.user?.uid,
            user: user.user?.email.split('@')[0],
          };
          addUser(userInfoObj);
          window.location.href = '/';
        }
    });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };

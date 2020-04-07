import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCRbYBbEFUAnJnuV8IqI3cVvCZL8M14ul8",
  authDomain: "events-50eee.firebaseapp.com",
  databaseURL: "https://events-50eee.firebaseio.com",
  projectId: "events-50eee",
  storageBucket: "events-50eee.appspot.com",
  messagingSenderId: "275349298984",
  appId: "1:275349298984:web:7c4550f26edeee0835fa1d"
};

export default firebase.initializeApp(firebaseConfig);

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU3_GOnggS95bvljkr3Ccx0o0XAtAg6oQ",
  authDomain: "fir-c3a65.firebaseapp.com",
  projectId: "fir-c3a65",
  storageBucket: "fir-c3a65.appspot.com",
  messagingSenderId: "641873578910",
  appId: "1:641873578910:web:65384fe60e60b12375248f",
  measurementId: "G-K5LCSJ3G8Z",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };

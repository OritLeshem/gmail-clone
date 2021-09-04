// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

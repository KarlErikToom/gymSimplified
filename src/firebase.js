// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACpPc3jgWy1TfiTVekGVZ63eX43ncIjrQ",
  authDomain: "gymsimplified-92eb8.firebaseapp.com",
  projectId: "gymsimplified-92eb8",
  storageBucket: "gymsimplified-92eb8.appspot.com",
  messagingSenderId: "992263091913",
  appId: "1:992263091913:web:8783ee46cfddc515d13f18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-reduc.firebaseapp.com",
  projectId: "react-firebase-reduc",
  storageBucket: "react-firebase-reduc.appspot.com",
  messagingSenderId: "503601340496",
  appId: "1:503601340496:web:71d29d8ec094a559e67155",
});

export const auth = app.auth();

export default app;

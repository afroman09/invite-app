import firebase from "firebase/app";
import "../Auth/AuthProvider";
import "firebase/firestore";
import "firebase/auth";

export const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
});

// if(firebase.apps.length === 0);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

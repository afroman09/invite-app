import firebase from "firebase/app";
import "../Auth/AuthProvider";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBC0Ji2E-LILDf8QoEpbTaiGJdEqCrVX6w",
  authDomain: "invite-ff5d3.firebaseapp.com",
  databaseURL: "https://invite-ff5d3.firebaseio.com",
  projectId: "invite-ff5d3",
  storageBucket: "invite-ff5d3.appspot.com",
  messagingSenderId: "453064280850",
  appId: "1:453064280850:web:24b15218e8a4906c7001cb",
  measurementId: "G-HV6VWLGFPM",
});

const auth = firebase.auth();
const db = firebase.firestore();
const collection = db.collection('tweets');

export { firebaseConfig, auth, db, collection };
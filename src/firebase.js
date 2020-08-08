import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrykrJI5mROAyDIpyh2-cyRMODQ5gMtfc",
  authDomain: "tinder-clone-f348d.firebaseapp.com",
  databaseURL: "https://tinder-clone-f348d.firebaseio.com",
  projectId: "tinder-clone-f348d",
  storageBucket: "tinder-clone-f348d.appspot.com",
  messagingSenderId: "756223083231",
  appId: "1:756223083231:web:460ad3a69fa8487b2c9f6a",
  measurementId: "G-H14MR3N3BE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;

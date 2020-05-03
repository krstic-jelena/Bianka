import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAKaGlq9Ec7OX5z5LifN3nEwTpbp5puBbM",
  authDomain: "website-2f03a.firebaseapp.com",
  databaseURL: "https://website-2f03a.firebaseio.com",
  projectId: "website-2f03a",
  storageBucket: "website-2f03a.appspot.com",
  messagingSenderId: "695436994050",
  appId: "1:695436994050:web:5ed36a8adda873ca53691b",
  measurementId: "G-D2CD87D56Y",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

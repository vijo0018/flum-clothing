import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9RIGkvvyuVs6pY6AsSqNz8Y7v6ifSvOM",
    authDomain: "flum-db.firebaseapp.com",
    databaseURL: "https://flum-db.firebaseio.com",
    projectId: "flum-db",
    storageBucket: "flum-db.appspot.com",
    messagingSenderId: "879596291432",
    appId: "1:879596291432:web:760fd73a2f3bbe95f382dd",
    measurementId: "G-5C8J65K9DB"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

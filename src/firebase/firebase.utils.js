import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD4COU9dzQT-nzh_djkc4jR6HMia6aR8zU",
  authDomain: "crwn-db-623ca.firebaseapp.com",
  projectId: "crwn-db-623ca",
  storageBucket: "crwn-db-623ca.appspot.com",
  messagingSenderId: "58461085361",
  appId: "1:58461085361:web:ba230f3165c607616dcc90",
  measurementId: "G-QTGZKH5GQR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

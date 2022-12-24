import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsTAqbWYxKE92GfhPATQLokVSWCD1hPog",
  authDomain: "signal-clone-42b90.firebaseapp.com",
  projectId: "signal-clone-42b90",
  storageBucket: "signal-clone-42b90.appspot.com",
  messagingSenderId: "598244891101",
  appId: "1:598244891101:web:53ba1c5210f3868922be34",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth, db };

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkfTVXdnd11zII4QLBARXTD2LL1RtW_-Q",
    authDomain: "twitter-clone-85255.firebaseapp.com",
    databaseURL: "https://twitter-clone-85255-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-85255",
    storageBucket: "twitter-clone-85255.appspot.com",
    messagingSenderId: "361057410796",
    appId: "1:361057410796:web:0ab66b2a48aa4a333ccfc9",
    measurementId: "G-T98ZBBEQNZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
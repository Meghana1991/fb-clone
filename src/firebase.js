import firebase, { initializeApp } from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAN_eFsEQLcbUaCOtSNSMzaHpxrUmKO0zw",
    authDomain: "react-facebook-4db39.firebaseapp.com",
    databaseURL: "https://react-facebook-4db39.firebaseio.com",
    projectId: "react-facebook-4db39",
    storageBucket: "react-facebook-4db39.appspot.com",
    messagingSenderId: "864991173511",
    appId: "1:864991173511:web:80221400b21c7d6ca29122",
    measurementId: "G-Z931X34NTE"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore()
const auth = firebase.auth();
//I have enabled google auth in the firebase console
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

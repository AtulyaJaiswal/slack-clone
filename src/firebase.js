// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCI4Io3Kv2a2hKO-k1NDSXmTU1_odofnF4",
    authDomain: "slack-clone-303ca.firebaseapp.com",
    projectId: "slack-clone-303ca",
    storageBucket: "slack-clone-303ca.appspot.com",
    messagingSenderId: "183295915625",
    appId: "1:183295915625:web:65fcf5ca8072fd8c2414f8",
    measurementId: "G-KZY1308Q69"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// db will allow access to database from any file
const db=firebaseApp.firestore();
// AUTHENTICATION FOR LOGIN
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// default ki wajah se curly brace nii lgana pdega db import krte samay



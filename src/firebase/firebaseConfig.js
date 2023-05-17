// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDcdd6R6DP0G51OeF-thx1Jww3wnaB7Fxo",
  authDomain: "padiexpress-8bed2.firebaseapp.com",
  projectId: "padiexpress-8bed2",
  storageBucket: "padiexpress-8bed2.appspot.com",
  messagingSenderId: "42357635966",
  appId: "1:42357635966:web:308b697569311d8172d12f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

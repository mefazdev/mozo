
// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRoZ5mlji202GUJuSm8sq6qaxU9F9ylOI",
  authDomain: "cleverkings-db210.firebaseapp.com",
  projectId: "cleverkings-db210",
  storageBucket: "cleverkings-db210.appspot.com",
  messagingSenderId: "1051106816123",
  appId: "1:1051106816123:web:5f2793a6e4830d84dfb2de",
  measurementId: "G-H8XJ1YR9NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage};




// gsiuhehzmqfcpkyp

// cleverkings@MAIL
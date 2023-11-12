// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnYXdW_zguZQK-HDBYxSsCSU9FjY6mIc8",
  authDomain: "react-notes-9db7c.firebaseapp.com",
  projectId: "react-notes-9db7c",
  storageBucket: "react-notes-9db7c.appspot.com",
  messagingSenderId: "696802186115",
  appId: "1:696802186115:web:2ae1ab4a6b4cc14fe85cb6",
  measurementId: "G-ZK53C1EW24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

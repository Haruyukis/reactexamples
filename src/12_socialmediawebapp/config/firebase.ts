// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn0NdHP5lF7f6S8pA3R2uMSkDYQMlnxA8",
  authDomain: "react-example-e7e68.firebaseapp.com",
  projectId: "react-example-e7e68",
  storageBucket: "react-example-e7e68.appspot.com",
  messagingSenderId: "906034642333",
  appId: "1:906034642333:web:b469a2acd3b0c84a130374",
  measurementId: "G-79PXE5YLN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize authentification method.
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Initialize access to the data base.
export const db = getFirestore();
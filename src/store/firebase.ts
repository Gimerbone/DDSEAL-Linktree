// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGY6sF8C5LfF2tbOPTSg6WI8N2WzDKjO0",
  authDomain: "seal-ddif.firebaseapp.com",
  projectId: "seal-ddif",
  storageBucket: "seal-ddif.firebasestorage.app",
  messagingSenderId: "660909076552",
  appId: "1:660909076552:web:a0b92e409d269cf3c7687d",
  measurementId: "G-Y13YS0S7S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
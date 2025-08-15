// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2690xonhBggKQKZ9-yLngxEHN-Og2xdM",
  authDomain: "teras-firebase.firebaseapp.com",
  databaseURL:
    "https://teras-firebase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "teras-firebase",
  storageBucket: "teras-firebase.firebasestorage.app",
  messagingSenderId: "582115074005",
  appId: "1:582115074005:web:ac6520af246dfa0307a75c",
  measurementId: "G-69XJF38GRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

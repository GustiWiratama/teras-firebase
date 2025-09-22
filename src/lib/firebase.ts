// lib/firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAK5wuFt0E09l5GD8kjxk76W3L0QwYPJLU",
  authDomain: "teras-db.firebaseapp.com",
  projectId: "teras-db",
  storageBucket: "teras-db.firebasestorage.app",
  messagingSenderId: "449023796735",
  appId: "1:449023796735:web:47b3cca073a659a4b873ca",
};

// biar gak double init
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ini yang harus dipakai
export const db = getFirestore(app);

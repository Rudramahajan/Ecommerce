import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6IblGRue6ng5kW9DSQHrmr45aI8jNRqE",
  authDomain: "ecommerce-1d849.firebaseapp.com",
  projectId: "ecommerce-1d849",
  storageBucket: "ecommerce-1d849.appspot.com",
  messagingSenderId: "313161075974",
  appId: "1:313161075974:web:570ff4f6636f7b801de287"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// export const firestore = firebase.firestore();
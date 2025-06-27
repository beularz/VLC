// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRHY3Q88Od-JMbkCAx1dER_Kpd5TjrXw8",
  authDomain: "vlc-4d0c5.firebaseapp.com",
  projectId: "vlc-4d0c5",
  storageBucket: "vlc-4d0c5.firebasestorage.app",
  messagingSenderId: "702937948390",
  appId: "1:702937948390:web:e589d40a210ab6f0e81b27",
  measurementId: "G-4Z6MXVWBFD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };

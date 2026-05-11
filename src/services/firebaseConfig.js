import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, OAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAYTzYr8IrsQMfMC7fSULLq8mLJNEUriW4",
    authDomain: "wellbe-246d9.firebaseapp.com",
    projectId: "wellbe-246d9",
    storageBucket: "wellbe-246d9.firebasestorage.app",
    messagingSenderId: "904241452954",
    appId: "1:904241452954:web:02b298818bebd0f11fcc23",
    measurementId: "G-YFPP07S9VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// OAuth Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');

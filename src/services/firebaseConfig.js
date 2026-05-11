import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider, OAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialize Firebase with safety checks for template mode
let app;
let auth;
let googleProvider;
let facebookProvider;
let appleProvider;

if (firebaseConfig.apiKey) {
    try {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        googleProvider = new GoogleAuthProvider();
        facebookProvider = new FacebookAuthProvider();
        appleProvider = new OAuthProvider('apple.com');
    } catch (error) {
        console.warn("Firebase initialization failed:", error.message);
    }
}

// Mock objects for template mode if Firebase is not initialized
if (!auth) {
    auth = {
        currentUser: null,
        onAuthStateChanged: (callback) => {
            callback(null);
            return () => {};
        },
        signInWithEmailAndPassword: () => Promise.resolve({ user: { uid: "mock-uid" } }),
        signOut: () => Promise.resolve(),
    };
    googleProvider = {};
    facebookProvider = {};
    appleProvider = {};
}

export { auth, googleProvider, facebookProvider, appleProvider };

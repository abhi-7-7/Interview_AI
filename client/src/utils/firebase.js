import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-6ecb9.firebaseapp.com",
  projectId: "interviewai-6ecb9",
  storageBucket: "interviewai-6ecb9.firebasestorage.app",
  messagingSenderId: "345191141770",
  appId: "1:345191141770:web:a5ac6dd249c698354c7873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-6a1d5.firebaseapp.com",
  projectId: "interviewiq-6a1d5",
  storageBucket: "interviewiq-6a1d5.firebasestorage.app",
  messagingSenderId: "158069505259",
  appId: "1:158069505259:web:071fc276a581a6099a12ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider}
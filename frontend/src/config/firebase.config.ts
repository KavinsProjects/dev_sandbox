import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "portfolio-48529.firebaseapp.com",
  projectId: "portfolio-48529",
  storageBucket: "portfolio-48529.firebasestorage.app",
  messagingSenderId: "381789188904",
  appId: "YOUR_APP_ID",
  measurementId: "G-XXXXXXXXXX"
};

console.log(import.meta.env);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const githubprovider = new GithubAuthProvider
const googleprovider = new GoogleAuthProvider();

export { app, auth, googleprovider,githubprovider };
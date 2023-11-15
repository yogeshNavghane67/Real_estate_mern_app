// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dc1b9.firebaseapp.com",
  projectId: "mern-estate-dc1b9",
  storageBucket: "mern-estate-dc1b9.appspot.com",
  messagingSenderId: "848641782838",
  appId: "1:848641782838:web:1e37639bc5a39299a35497"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
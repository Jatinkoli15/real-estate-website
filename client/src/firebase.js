// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c127f.firebaseapp.com",
  projectId: "mern-estate-c127f",
  storageBucket: "mern-estate-c127f.appspot.com",
  messagingSenderId: "103627643013",
  appId: "1:103627643013:web:2e6796f4d082ab234771ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f6710.firebaseapp.com",
  projectId: "mern-estate-f6710",
  storageBucket: "mern-estate-f6710.appspot.com",
  messagingSenderId: "425825720377",
  appId: "1:425825720377:web:ae7656dca17795bc5355e8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

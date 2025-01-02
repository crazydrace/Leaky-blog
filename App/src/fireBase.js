// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "leaky-blog-d8d8f.firebaseapp.com",
  projectId: "leaky-blog-d8d8f",
  storageBucket: "leaky-blog-d8d8f.firebasestorage.app",
  messagingSenderId: "59774987093",
  appId: "1:59774987093:web:8890bd2d8c77bdf99b9ddc",
  measurementId: "G-FTL92G8CGQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

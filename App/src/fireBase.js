// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "leaky-blog-d3e7c.firebaseapp.com",
  projectId: "leaky-blog-d3e7c",
  storageBucket: "leaky-blog-d3e7c.firebasestorage.app",
  messagingSenderId: "13907972431",
  appId: "1:13907972431:web:9310289e6b76dac585f53a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

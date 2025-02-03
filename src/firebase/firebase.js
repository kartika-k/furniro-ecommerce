// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGKMH5scniQ7pEYNERwtSlo_k5BYuWFuc",
  authDomain: "furniro-ecommerce-website.firebaseapp.com",
  projectId: "furniro-ecommerce-website",
  storageBucket: "furniro-ecommerce-website.firebasestorage.app",
  messagingSenderId: "118862624188",
  appId: "1:118862624188:web:569de4987cdea838e527b9",
  measurementId: "G-FZ22RZK4TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth(app)
export const db = getFirestore(app)
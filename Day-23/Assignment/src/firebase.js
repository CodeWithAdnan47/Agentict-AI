// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI37qLZyIzy1FEtYygEdkADC5K8dHz4Us",
  authDomain: "day-23-f993a.firebaseapp.com",
  projectId: "day-23-f993a",
  storageBucket: "day-23-f993a.firebasestorage.app",
  messagingSenderId: "731988711411",
  appId: "1:731988711411:web:cf1c40b55c325863df2486",
  measurementId: "G-0WX6WVZS46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
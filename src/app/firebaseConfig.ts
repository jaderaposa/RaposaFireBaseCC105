// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDorOw1Up5pcSHND4rMBoGQOzit6Q7q0-U",
  authDomain: "jadecc105.firebaseapp.com",
  databaseURL: "https://jadecc105-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jadecc105",
  storageBucket: "jadecc105.appspot.com",
  messagingSenderId: "415537399097",
  appId: "1:415537399097:web:1e9687203e9b378e6c94e8",
  measurementId: "G-3TSTEHT8KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

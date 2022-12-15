// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMPz1apNJ78zt-DHkHBQOABEGYDvdiacM",
  authDomain: "grademangament.firebaseapp.com",
  projectId: "grademangament",
  storageBucket: "grademangament.appspot.com",
  messagingSenderId: "827287750394",
  appId: "1:827287750394:web:0e38cb398117112efaeb43",
  measurementId: "G-ENCSSYDSJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
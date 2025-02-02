// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-D39zquE_r9MgSX8mAhz47ZJR8Z8B8O0",
  authDomain: "cineflix-92fcd.firebaseapp.com",
  projectId: "cineflix-92fcd",
  storageBucket: "cineflix-92fcd.firebasestorage.app",
  messagingSenderId: "377484860821",
  appId: "1:377484860821:web:90ff099d500a700635ea9c",
  measurementId: "G-X4FS7PSZES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
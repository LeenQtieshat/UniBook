// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9daKynFgNQSOXyqxZcBb_dODVPm_1b-g",
  authDomain: "uni-book-8ce30.firebaseapp.com",
  projectId: "uni-book-8ce30",
  storageBucket: "uni-book-8ce30.appspot.com",
  messagingSenderId: "355710828399",
  appId: "1:355710828399:web:c93afe44753ff70222329a",
  measurementId: "G-S0V98D44TN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


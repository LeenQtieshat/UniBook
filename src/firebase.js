// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOTITj8BeyZd18cD0-sFi1rRUjNnjm5S0",
  authDomain: "unibook-cdbc1.firebaseapp.com",
  databaseURL:"https://unibook-cdbc1-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "unibook-cdbc1",
  storageBucket: "unibook-cdbc1.appspot.com",
  messagingSenderId: "180378688413",
  appId: "1:180378688413:web:ca781e6f1fd4751bd46d74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
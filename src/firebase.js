// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkW1RK7w9OQVEHsA9GHa7vAbX5NlIVbCA",
  authDomain: "tinder-clone-devendra.firebaseapp.com",
  projectId: "tinder-clone-devendra",
  storageBucket: "tinder-clone-devendra.appspot.com",
  messagingSenderId: "1071971092084",
  appId: "1:1071971092084:web:6630918f5273443619f321",
  measurementId: "G-JFXBR5RVWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);


export default database;
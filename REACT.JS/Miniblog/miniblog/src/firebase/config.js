// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFLhHiZWKmScMYj4786_u8fFGAArADVHU",
  authDomain: "teste-61394.firebaseapp.com",
  projectId: "teste-61394",
  storageBucket: "teste-61394.appspot.com",
  messagingSenderId: "258364608842",
  appId: "1:258364608842:web:bf038d58be2e8463bd71b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

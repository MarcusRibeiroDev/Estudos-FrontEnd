// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9eA7Ra8vR5APzfI0VwY31fsc9iV6UkJA",
  authDomain: "miniblog-a4720.firebaseapp.com",
  projectId: "miniblog-a4720",
  storageBucket: "miniblog-a4720.appspot.com",
  messagingSenderId: "632828164620",
  appId: "1:632828164620:web:e76fe5a02b9ad80b030c29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
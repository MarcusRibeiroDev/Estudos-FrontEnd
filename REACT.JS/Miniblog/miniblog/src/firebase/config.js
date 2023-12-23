// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwCd1qMMY7bMv2IkmEnehmeI_KuPFApfU",
  authDomain: "miniblog-d70ab.firebaseapp.com",
  projectId: "miniblog-d70ab",
  storageBucket: "miniblog-d70ab.appspot.com",
  messagingSenderId: "1098259729908",
  appId: "1:1098259729908:web:aff724e96e467d94377da1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}
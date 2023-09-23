// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import {getFirestore, collection} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl7vz33UNgZfc-Xv5oq-_qjYlCeo35NO0",
  authDomain: "expensify-6e823.firebaseapp.com",
  projectId: "expensify-6e823",
  storageBucket: "expensify-6e823.appspot.com",
  messagingSenderId: "1027593934719",
  appId: "1:1027593934719:web:6c0ea69185652b79a2ac4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsref = collection(db, "trips")
export const expensesRef = collection(db, "expenses")

export default app;
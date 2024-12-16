
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_vcOJYA7SOyYtsvO86FANpimJzk9x8dk",
  authDomain: "blogging-app-947bd.firebaseapp.com",
  projectId: "blogging-app-947bd",
  storageBucket: "blogging-app-947bd.firebasestorage.app",
  messagingSenderId: "152612554029",
  appId: "1:152612554029:web:7a240fbfb7e6726ab27fa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

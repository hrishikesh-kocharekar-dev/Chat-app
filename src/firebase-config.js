// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7tDE1_jMNT8NvGJBQELVn3ueZWfawq9Q",
  authDomain: "chat-d09c2.firebaseapp.com",
  projectId: "chat-d09c2",
  storageBucket: "chat-d09c2.appspot.com",
  messagingSenderId: "1030218716855",
  appId: "1:1030218716855:web:03c9408383d2dfc9e11f32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

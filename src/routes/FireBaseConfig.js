import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgXCGvHivTnxnD4z0mbYJ8xYGu-m6y1n0",
  authDomain: "emailpasswordlogin-e5ee6.firebaseapp.com",
  projectId: "emailpasswordlogin-e5ee6",
  storageBucket: "emailpasswordlogin-e5ee6.appspot.com",
  messagingSenderId: "331466397809",
  appId: "1:331466397809:web:43fb9d26c652765e3ce3d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);

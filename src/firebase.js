// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZwc2J8-OGxrqXEJCjm68zlOQk6P2kg08",
  authDomain: "auth-51443.firebaseapp.com",
  projectId: "auth-51443",
  storageBucket: "auth-51443.appspot.com",
  messagingSenderId: "828557875502",
  appId: "1:828557875502:web:c69aabe02bff02d69642bf",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

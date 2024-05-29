/* eslint-disable prettier/prettier */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAIZqISad4ebszfxuJ23onGd89QgyEBwKI",
  authDomain: "saludcontigo-214bd.firebaseapp.com",
  projectId: "saludcontigo-214bd",
  storageBucket: "saludcontigo-214bd.appspot.com",
  messagingSenderId: "440248603997",
  appId: "1:440248603997:web:48b4ef3ccd85c09742c4b4"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
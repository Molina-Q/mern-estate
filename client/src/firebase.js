// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // VITE_ must be used to be recognize by vite
   authDomain: "mern-estate-168fd.firebaseapp.com",
   projectId: "mern-estate-168fd",
   storageBucket: "mern-estate-168fd.appspot.com",
   messagingSenderId: "676404509033",
   appId: "1:676404509033:web:2d5ab6eb3f7b91eec965f8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

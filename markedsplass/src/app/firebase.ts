// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkNwXSyq7Zol8E3xJQO8tw8oNX0C8G75E",
  authDomain: "markedsplass-cb16c.firebaseapp.com",
  projectId: "markedsplass-cb16c",
  storageBucket: "markedsplass-cb16c.appspot.com",
  messagingSenderId: "106473227597",
  appId: "1:106473227597:web:99c00d39fe565c2456a304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth }; // Export the auth object
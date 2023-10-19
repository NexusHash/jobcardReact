// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvoVbD_TFmnbPGKNemNaoJp6Yzkd4B3DA",
  authDomain: "nexcards-cc2b9.firebaseapp.com",
  databaseURL: "https://nexcards-cc2b9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nexcards-cc2b9",
  storageBucket: "nexcards-cc2b9.appspot.com",
  messagingSenderId: "460663206057",
  appId: "1:460663206057:web:3f6166376d9dd2011e39b8",
  measurementId: "G-Q6448BXZWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
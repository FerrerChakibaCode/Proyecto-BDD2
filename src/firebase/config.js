// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuR4CqPTEI6I5trJ8ZQ235nyc9rXmkng8",
  authDomain: "baseball-stats-bdd2.firebaseapp.com",
  projectId: "baseball-stats-bdd2",
  storageBucket: "baseball-stats-bdd2.appspot.com",
  messagingSenderId: "173769097079",
  appId: "1:173769097079:web:ce26e6d15158ad3413eb72",
  measurementId: "G-DM28X35HB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const store = getStorage(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
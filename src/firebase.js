// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app&apos;s Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJrUv5P_I0KX-KwAWnw_XlZJNzLRNPciA",
  authDomain: "hassan-turi.firebaseapp.com",
  projectId: "hassan-turi",
  storageBucket: "hassan-turi.appspot.com",
  messagingSenderId: "318840992268",
  appId: "1:318840992268:web:882a78c3ec5c1835423429",
  measurementId: "G-NK3XJJWT8P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);

export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhO4be4rauP3rd_77PtwxnnciFuVLfRIk",
  authDomain: "inventory-checker-e6836.firebaseapp.com",
  projectId: "inventory-checker-e6836",
  storageBucket: "inventory-checker-e6836.appspot.com",
  messagingSenderId: "831050573947",
  appId: "1:831050573947:web:f033b5098598298ecd9ade",
  measurementId: "G-7ZHCJFYZGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Initialize Analytics only in the browser
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(error => {
    console.error('Analytics is not supported:', error);
  });
}

export { firestore, storage, auth, analytics };

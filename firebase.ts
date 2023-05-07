import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjJWjZpQp8_Vh5rAoaDi3CigSWa1Hv3bc",
  authDomain: "rarbitchatgpt.firebaseapp.com",
  projectId: "rarbitchatgpt",
  storageBucket: "rarbitchatgpt.appspot.com",
  messagingSenderId: "1007850472191",
  appId: "1:1007850472191:web:d525e419a03062575b42ca",
  measurementId: "G-00SH3CRL5F",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Singleton Pattern in coding - we only want a single instance
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };

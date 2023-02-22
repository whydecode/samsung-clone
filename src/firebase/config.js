import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQc6m8QB7kdcIOn7iOc7qWTHsLKQ8JrXw",
  authDomain: "web-store-5e675.firebaseapp.com",
  projectId: "web-store-5e675",
  storageBucket: "web-store-5e675.appspot.com",
  messagingSenderId: "716632704678",
  appId: "1:716632704678:web:ca5bb720573287a51a1667",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3noa0j2feiGh6Q8ut91n_-F1au1QC8r8",
  authDomain: "laptop-6c7de.firebaseapp.com",
  projectId: "laptop-6c7de",
  storageBucket: "laptop-6c7de.firebasestorage.app",
  messagingSenderId: "773391009622",
  appId: "1:773391009622:web:d14aa68f23902db661f8f7",
  measurementId: "G-100T4YNH2W",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

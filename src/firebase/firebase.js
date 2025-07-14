import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "hueline-enterprises-crm.firebaseapp.com",
  databaseURL: "https://hueline-enterprises-crm-default-rtdb.firebaseio.com",
  projectId: "hueline-enterprises-crm",
  storageBucket: "hueline-enterprises-crm.firebasestorage.app",
  messagingSenderId: "190107421387",
  appId: "1:190107421387:web:10a6d3d6e095863d55e94e",
  measurementId: "G-6Y3C1X6QE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database  = getDatabase(app);


export { app, analytics, database };
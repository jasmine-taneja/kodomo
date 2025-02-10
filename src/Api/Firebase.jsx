import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_kCUVq-JshZsma60qL3MXePQdTkYKKDI",
  authDomain: "kodomo-firebase.firebaseapp.com",
  projectId: "kodomo-firebase",
  storageBucket: "kodomo-firebase.firebasestorage.app",
  messagingSenderId: "1090167464457",
  appId: "1:1090167464457:web:f63d3e9d7b6f38cf068ed8",
  measurementId: "G-HC0M55B3HQ"
};

const app = initializeApp(firebaseConfig);

export default app;

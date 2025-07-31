import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.apiKey,
  authDomain: import.meta.authDomain,
  projectId: import.meta.projectId,
  storageBucket: import.meta.storageBucket,
  messagingSenderId: import.meta.apiKeymessagingSenderId,
  appId: import.meta.appId,
  measurementId: import.meta.measurementId
};

const app = initializeApp(firebaseConfig);

export default app;

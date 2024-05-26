import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5ZYqZC6lbwD95K_r2qmp48xxw2lIoTAQ",
  authDomain: "lotus-meditation.firebaseapp.com",
  projectId: "lotus-meditation",
  storageBucket: "lotus-meditation.appspot.com",
  messagingSenderId: "743580589249",
  appId: "1:743580589249:web:d7b073240c879157240840"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

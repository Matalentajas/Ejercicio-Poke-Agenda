
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiNyfHttYFSKLTbzKEXP54bCJvy0i0VhE",
  authDomain: "pokedex-5e31a.firebaseapp.com",
  projectId: "pokedex-5e31a",
  storageBucket: "pokedex-5e31a.firebasestorage.app",
  messagingSenderId: "831408477730",
  appId: "1:831408477730:web:033530bfc8eb27dc155c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "babble-5b387.firebaseapp.com",
  projectId: "babble-5b387",
  storageBucket: "babble-5b387.appspot.com",
  messagingSenderId: "476315027187",
  appId: "1:476315027187:web:70c715cb1be149f8601986"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth= getAuth();
export const storage=getStorage();
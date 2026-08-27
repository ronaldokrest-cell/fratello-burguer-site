import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJ4b4-b3YMKBe-skBM7sUFQhHV6Q8q2Lg",
  authDomain: "painel-saas-clientes.firebaseapp.com",
  projectId: "painel-saas-clientes",
  storageBucket: "painel-saas-clientes.firebasestorage.app",
  messagingSenderId: "438635708908",
  appId: "1:438635708908:web:01a93232520e8c9e0bc0c9",
  measurementId: "G-H3K6JXNMBV"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.useDeviceLanguage();
export const db = getFirestore(app);

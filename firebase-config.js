import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDExWOE_zb5LWMJogJQUazThNln6TX9HwQ",
  authDomain: "catechstore-f5485.firebaseapp.com",
  projectId: "catechstore-f5485",
  storageBucket: "catechstore-f5485.firebasestorage.app",
  messagingSenderId: "208024106904",
  appId: "1:208024106904:web:b759ac6e74ff0180429ded"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

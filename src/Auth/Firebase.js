import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACY0ltvf8I53LjFdEZwpYpyybkf0MwTRI",
  authDomain: "automobiles-98457.firebaseapp.com",
  projectId: "automobiles-98457",
  storageBucket: "automobiles-98457.appspot.com",
  messagingSenderId: "565167582791",
  appId: "1:565167582791:web:c058a70e24646954a4cb62"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
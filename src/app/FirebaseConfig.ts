// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEw1C2pFlxhRhrMCtL4t2UDAJK-MxI5NM",
  authDomain: "web-music-715b3.firebaseapp.com",
  databaseURL: "https://web-music-715b3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web-music-715b3",
  storageBucket: "web-music-715b3.appspot.com",
  messagingSenderId: "743324820227",
  appId: "1:743324820227:web:b2576b45fc9ae32a137f36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbFB = getDatabase(app);
const Auth = getAuth(app)

export { dbFB,Auth }
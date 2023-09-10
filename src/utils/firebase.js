// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgoIcycCzDbcX0CtszlhYs1kB8TdRUJpc",
  authDomain: "netflixgpt-66de5.firebaseapp.com",
  projectId: "netflixgpt-66de5",
  storageBucket: "netflixgpt-66de5.appspot.com",
  messagingSenderId: "813199332738",
  appId: "1:813199332738:web:5039d3557f18b84ebc6b9b",
  measurementId: "G-2CRX9K87LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
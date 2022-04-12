// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe0qTGDLdYrXfDadbxtCHAqA2J0iK_UHE",
  authDomain: "hotel-app-web.firebaseapp.com",
  projectId: "hotel-app-web",
  storageBucket: "hotel-app-web.appspot.com",
  messagingSenderId: "309633830123",
  appId: "1:309633830123:web:491c7bf6bb66e1f65bc2ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
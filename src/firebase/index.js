import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyABRLzD2FCZ3u8VCyoktMaX_rpu-6fzX-k",
  authDomain: "ecommerce-react-monkey.firebaseapp.com",
  projectId: "ecommerce-react-monkey",
  storageBucket: "ecommerce-react-monkey.appspot.com",
  messagingSenderId: "902339791943",
  appId: "1:902339791943:web:c52d2e3397f861b1847562"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDWPa7yI9CCimZforu9trFWLoCYZaW96ao",
  authDomain: "newa-37f63.firebaseapp.com",
  projectId: "newa-37f63",
  storageBucket: "newa-37f63.appspot.com",
  messagingSenderId: "264781075918",
  appId: "1:264781075918:web:d9427c64909757644e879f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

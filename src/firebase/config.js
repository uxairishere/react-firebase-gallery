import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxQUeYv8w3d7KAdP6u5puLxD_yH3G2XCU",
  authDomain: "private-gallery-f47e5.firebaseapp.com",
  databaseURL: "https://private-gallery-f47e5-default-rtdb.firebaseio.com",
  projectId: "private-gallery-f47e5",
  storageBucket: "private-gallery-f47e5.appspot.com",
  messagingSenderId: "980632491985",
  appId: "1:980632491985:web:10e7b7c3d48aa51ad1f2f0",
  measurementId: "G-JV4JWPC5DN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const gallerystorage = firebase.storage();
const galleryfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// const analytics = getAnalytics(app);

export { gallerystorage, galleryfirestore, timestamp};
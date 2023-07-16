// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB2nykDnjAJes4qr1Fqjj9-iTDwe8acReE',
  authDomain: 'golden-town-67c51.firebaseapp.com',
  projectId: 'golden-town-67c51',
  storageBucket: 'golden-town-67c51.appspot.com',
  messagingSenderId: '165423312678',
  appId: '1:165423312678:web:be758ca7eee25d043ddbe7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 


// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZ4709_2LmOTVSdha8zYwi3Z5HOibkJ4c',
  authDomain: 'tracking-app-608fc.firebaseapp.com',
  databaseURL:
    'https://tracking-app-608fc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tracking-app-608fc',
  storageBucket: 'tracking-app-608fc.appspot.com',
  messagingSenderId: '536142387831',
  appId: '1:536142387831:web:78e84a1cc274161e3c4472',
  measurementId: 'G-X5ZQ8FEJ53',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

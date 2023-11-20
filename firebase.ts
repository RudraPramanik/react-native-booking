import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

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

const app = initializeApp(firebaseConfig);

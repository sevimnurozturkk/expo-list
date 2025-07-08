// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBhLeDy0qo6Tkj-noBxqrNi9y3s9CplLzI',
  authDomain: 'expo-auth-9b283.firebaseapp.com',
  projectId: 'expo-auth-9b283',
  storageBucket: 'expo-auth-9b283.firebasestorage.app',
  messagingSenderId: '912492367959',
  appId: '1:912492367959:web:971c16977df61518b75312',
  measurementId: 'G-V8FJ8H7FMF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
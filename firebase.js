// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIPLLhGNVZWEEeLbHKU67XcTnWUEDTBRA",
  authDomain: "firstlogin-fc6df.firebaseapp.com",
  databaseURL: "https://firstlogin-fc6df-default-rtdb.firebaseio.com",
  projectId: "firstlogin-fc6df",
  storageBucket: "firstlogin-fc6df.appspot.com",
  messagingSenderId: "199118799947",
  appId: "1:199118799947:web:fade267db1b06db395f9ce"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage
const auth = initializeAuth(appfirebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { appfirebase, auth };

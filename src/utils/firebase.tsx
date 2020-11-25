import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string
}

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG) as FirebaseConfig;

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const bucketName = firebaseConfig.storageBucket
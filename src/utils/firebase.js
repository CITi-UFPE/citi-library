import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'citi-library.firebaseapp.com',
  databaseURL: 'https://citi-library.firebaseio.com',
  projectId: 'citi-library',
  storageBucket: 'citi-library.appspot.com',
  messagingSenderId: '682974949035'
}

export const firebaseApp = firebase.initializeApp(config)
export const firebaseDatabase = firebase.firestore()
firebaseDatabase.settings({ timestampsInSnapshots: true })

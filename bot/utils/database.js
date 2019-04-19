require('firebase/firestore')
const firebase = require('firebase')

const { LIBRARY_API_KEY } = process.env

const LIBRARY_FIREBASE_CONFIGS = {
  apiKey: LIBRARY_API_KEY,
  authDomain: 'citi-library.firebaseapp.com',
  databaseURL: 'https://citi-library.firebaseio.com',
  projectId: 'citi-library',
  storageBucket: 'citi-library.appspot.com',
  messagingSenderId: '682974949035'
}

firebase.initializeApp(LIBRARY_FIREBASE_CONFIGS)

const database = firebase.firestore()

module.exports = database

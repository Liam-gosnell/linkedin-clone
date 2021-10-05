import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAO84-I6BG5IdvqK5kB88jmt7A92gM91hw",
    authDomain: "linkedin-clone-927a4.firebaseapp.com",
    projectId: "linkedin-clone-927a4",
    storageBucket: "linkedin-clone-927a4.appspot.com",
    messagingSenderId: "556034794680",
    appId: "1:556034794680:web:e5c98bdcd56d02a723c04d",
    measurementId: "G-X85L94C83Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
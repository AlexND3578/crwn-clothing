// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {  
      apiKey: "AIzaSyDJpDCD_p08LCjWk5-5AnT3CIxX1uYbec8",
      authDomain: "crwn-clothing-38.firebaseapp.com",
      projectId: "crwn-clothing-38",
      storageBucket: "crwn-clothing-38.appspot.com",
      messagingSenderId: "820300568171",
      appId: "1:820300568171:web:589f3d136ec8a40083432e",
      measurementId: "G-8SJ98PMCT4"
 };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
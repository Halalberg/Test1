import firebase from 'firebase/app';
import 'firebase/firestore'; // for the db
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBoMWpRjo343lUH3IFkGk0AQD2C01u9qH0",
    authDomain: "shallow-crafts-33c32.firebaseapp.com",
    databaseURL: "https://shallow-crafts-store.firebaseio.com",
    projectId: "shallow-crafts-33c32",
    storageBucket: "shallow-crafts-33c32.appspot.com",
    messagingSenderId: "1098052450879",
    appId: "1:1098052450879:web:99274ece185abbfe7c168a"
  }

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return };

  const userRef = firestore.doc(`users/${userAuth.uid}`) //users/uniq26535
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export {
  firestore,
  createUserProfileDocument,
  auth,
}
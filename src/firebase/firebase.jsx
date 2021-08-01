import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCaboAGh4Yj97F6lVeJyfV3QHtXamxGV5A",
    authDomain: "ecohouse-79f2f.firebaseapp.com",
    projectId: "ecohouse-79f2f",
    storageBucket: "ecohouse-79f2f.appspot.com",
    messagingSenderId: "39411046941",
    appId: "1:39411046941:web:d79fcb014a5c50f68b44f4",
    measurementId: "G-VHWML1QKHS"
  };


const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
    return app;
}
export const db = firebase.firestore();
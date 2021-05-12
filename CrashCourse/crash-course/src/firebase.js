import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAUeh1yH6eDk53MGgrOi4ySBXnsnNfJeCM",
    authDomain: "webprojects-f5621.firebaseapp.com",
    projectId: "webprojects-f5621",
    storageBucket: "webprojects-f5621.appspot.com",
    messagingSenderId: "328799765081",
    appId: "1:328799765081:web:a7966bbb9ae6650b386748",
    measurementId: "G-P22G0B19L3"
}
firebase.initializeApp(config)
export default firebase
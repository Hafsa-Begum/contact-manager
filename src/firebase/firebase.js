import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyDrTq4k97Yt_N7iFmZFyJBgWpf0kIhpk",
    authDomain: "contact-manager-70944.firebaseapp.com",
    projectId: "contact-manager-70944",
    storageBucket: "contact-manager-70944.appspot.com",
    messagingSenderId: "823373063790",
    appId: "1:823373063790:web:a84cc524cd15590c2e687f"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// const auth = getAuth();
// const registerUsingEmailAndPassword = createUserWithEmailAndPassword(auth, email, password)

// export { authorization };
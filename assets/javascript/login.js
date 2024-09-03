import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

function SignIn() {
    const firebaseConfig = {
        apiKey: "AIzaSyBTZuWrpyi-6rrwWkQ3ceAW5TVITrvvly4",
        authDomain: "fwms-3a643.firebaseapp.com",
        projectId: "fwms-3a643",
        storageBucket: "fwms-3a643.appspot.com",
        messagingSenderId: "226953448190",
        appId: "1:226953448190:web:16602a15149fd82b4a73af",
        measurementId: "G-F216P1MNE1"
    };
    
    firebase=initializeApp(firebaseConfig);
    
    const auth = firebase.auth();
    const database = firebase.database();
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    try {
        auth.signInWithEmailAndPassword(email, password)
            .then(function () {
                alert("Sign In successful")
            })
            .catch(function (error) {
                console.log(error.message);
            });
    } catch (error) {
        console.log(error);
    }
}

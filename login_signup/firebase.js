import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

  
const firebaseConfig = {
    apiKey: "AIzaSyBJmM_iThfjNd1lthdo6G9b8onpLtEBulo",
    authDomain: "web-project-f4859.firebaseapp.com",
    databaseURL: "https://web-project-f4859-default-rtdb.firebaseio.com",
    projectId: "web-project-f4859",
    storageBucket: "web-project-f4859.appspot.com",
    messagingSenderId: "979145255744",
    appId: "1:979145255744:web:25e6d70b42711dcdf0e8a5",
    measurementId: "G-QME705QXJ4"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database= getDatabase(app);
const auth= getAuth();
//For creating account
signup.addEventListener('click',(e)=>{

    var email=document.getElementById('create_emailid').value;
    var username=document.getElementById('create_username').value;
    var password=document.getElementById('create_password').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    set(ref(database,'users/'+user.uid),{
        username: username,
        email: email
    })
    window.location.href="content.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert("Error Message")
  });

})

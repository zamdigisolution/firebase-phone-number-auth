//var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMQWhLZqivwYIhLldujsUurlM-p9mUxRU",
  authDomain: "ll-cust-subprod.firebaseapp.com",
  databaseURL: "https://ll-cust-subprod.firebaseio.com",
  projectId: "ll-cust-subprod",
  storageBucket: "ll-cust-subprod.appspot.com",
  messagingSenderId: "956727394482",
  appId: "1:956727394482:web:a8109242d3a90f704409ab",
  measurementId: "G-15QL6X9PPQ"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const recaptcha = app.auth.RecaptchaVerifier('recaptcha');


function auth(){

    var number = '+91' + document.querySelector('input').value;
  
    app.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
        console.log('successful text message');


        var 
            code = prompt('Please enter your verification number ', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log('authentication success', result.user);

            document.querySelector('label').textContent += 'Success ' + result.user.phoneNumber;
            
        }).catch(function (error) {
            console.error('authentication failed', error);
            
        });

    })
    .catch(function (error) {
        console.error('Failed to send text', error);

    });
  
}
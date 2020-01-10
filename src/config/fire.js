  import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDh1WIu5rqWrbs5FRhVCPAuhn_SCfB89rE",
    authDomain: "mainapp-11b56.firebaseapp.com",
    databaseURL: "https://mainapp-11b56.firebaseio.com",
    projectId: "mainapp-11b56",
    storageBucket: "mainapp-11b56.appspot.com",
    messagingSenderId: "548986922334",
    appId: "1:548986922334:web:cb7a61616a669d3fe61bcf"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);;

  export default fire;
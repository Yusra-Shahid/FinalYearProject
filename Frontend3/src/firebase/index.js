import firebase from "firebase/app";
  import "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyCQdJ2fYP1F6IPnhn4lVZ9DNjZJZEg0Isc",
    authDomain: "i-medcare.firebaseapp.com",
    projectId: "i-medcare",
    storageBucket: "i-medcare.appspot.com",
    messagingSenderId: "918401126875",
    appId: "1:918401126875:web:303cb150ff9387fdc217fe",
    measurementId: "G-Z2551VZR6Q"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
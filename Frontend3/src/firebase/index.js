// import firebase from "firebase/app";
//   import "firebase/storage";

//   const firebaseConfig = {
//     apiKey: "AIzaSyCQdJ2fYP1F6IPnhn4lVZ9DNjZJZEg0Isc",
//     authDomain: "i-medcare.firebaseapp.com",
//     projectId: "i-medcare",
//     storageBucket: "i-medcare.appspot.com",
//     messagingSenderId: "918401126875",
//     appId: "1:918401126875:web:303cb150ff9387fdc217fe"
//     // measurementId: "G-Z2551VZR6Q"
//   };

// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

// export { storage, firebase as default };

import firebase from "firebase/app";
  import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2rp8zmynddCNFXYABLhUTiTax5gGmef0",
  authDomain: "rent-a-car-5dabd.firebaseapp.com",
  projectId: "rent-a-car-5dabd",
  storageBucket: "rent-a-car-5dabd.appspot.com",
  messagingSenderId: "197068102895",
  appId: "1:197068102895:web:0a5155082dd1ca8a9bcf1a"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };

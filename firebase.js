// firebase.js
const firebaseConfig = {
    apiKey: "AIzaSyCi0nrCvm32f4AxFPXQx3eRmOnU0X04yVo",
    authDomain: "manga-story-app-6b3c5.firebaseapp.com",
    projectId: "manga-story-app-6b3c5",
    storageBucket: "manga-story-app-6b3c5.firebasestorage.app",
    messagingSenderId: "517961185007",
    appId: "1:517961185007:web:fa14d20ff91cd338b5cd1a",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Export Firebase services
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  export { auth, db };
  
  



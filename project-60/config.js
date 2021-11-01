import firebase from "firebase";

//initialize your databas
const firebaseConfig = {
  apiKey: "AIzaSyDqrhN1Nyz7HDNCn2tuY5cAuWdALBK5dd0",
  authDomain: "attendance-app-8b05f.firebaseapp.com",
  projectId: "attendance-app-8b05f",
  storageBucket: "attendance-app-8b05f.appspot.com",
  messagingSenderId: "821937576489",
  appId: "1:821937576489:web:fa41b33f41bd8fd976da38",
  measurementId: "G-SBE4SFD9CN"
};

  firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  
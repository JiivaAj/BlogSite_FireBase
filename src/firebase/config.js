import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDFd26v_eVjjuKG58T4D4UTYn1wyRNieRQ",
    authDomain: "blog-25ac0.firebaseapp.com",
    projectId: "blog-25ac0",
    storageBucket: "blog-25ac0.appspot.com",
    messagingSenderId: "333070415303",
    appId: "1:333070415303:web:38ebacda104fe6b76ad5e2"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()
  const auth = getAuth()

  export {db,auth}
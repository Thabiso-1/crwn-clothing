import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    } from 'firebase/auth';


    import {
      getFirestore,
      doc,
      getDoc,
      setDoc
    } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDuBy3f5xV5zWxvXSqvxaVsuhnq089b0o",
    authDomain: "crwn-clothing-db-1d75e.firebaseapp.com",
    projectId: "crwn-clothing-db-1d75e",
    storageBucket: "crwn-clothing-db-1d75e.appspot.com",
    messagingSenderId: "690205117146",
    appId: "1:690205117146:web:a4281ff05e64ecd07173e3"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters(
    {
        prompt:"select_account"
    }
  );

  export const auth = getAuth();
  export const signInWithGooglePopup =() => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirct =() => signInWithRedirect(auth, provider)

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid )

    console.log(userDocRef);

    const userSnapshot =  await getDoc(userDocRef);
    console.log(userSnapshot.exists());


    if(!userSnapshot.exists())
    {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(
          userDocRef,{
            displayName,email,createdAt,...additionalInformation
          }
        );
      }
      catch(error)
      {
        console.log('error creating the user', error.message);
      }
    }
    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  };
import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

const SignIn = () =>{
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
        //console.log(response);
    }

    return (
        <div>
            <h1>I am the sign in</h1>
            <button onClick={logGoogleUser}>
                Sign in with google popup
            </button>
        </div>
    )
  }

  export default SignIn
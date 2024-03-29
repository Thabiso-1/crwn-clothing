import { useState } from "react";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";




const defaultFormFields ={
    email: '',
    password: '',
}
const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const resetFormFields = () =>
    {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () =>{
       await signInWithGooglePopup();
        
       
       
    }
   
    const handleSubmit = async (event) =>{
        event.preventDefault();

        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            
            resetFormFields();
        }
        catch(error)
        {
            if(error.code === "auth/invalid-credential")
            {
                alert('incorrect credentials');
            }
            console.log(error);
        }
    };

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    };
    return(
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput type="email"  
                label="Email"
                required 
                onChange={handleChange} 
                name="email" 
                value={email}
                />
                
                <FormInput type="password" 
                label="Password" 
                required 
                onChange={handleChange} 
                name="password" 
                value={password}
                />
                
                <div className="buttons-container">
                    <Button type="submit">
                        Sign In
                    </Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google sign In
                    </Button>
                </div>
              
            </form>
        </div>
    );
};

export default SignInForm;
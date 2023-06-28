import { auth, provider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () : JSX.Element => {
    // ⚠️ Function handling the Google Authentification and redirect to the main page.    
    const navigate = useNavigate();

    const handleSignInGoogle = async () => {
        await signInWithPopup(auth, provider);
        navigate("/");
    }

    return (
        <div>
            <p>Login Page</p>
            <p>Please sign in with Google</p>
            <button onClick={handleSignInGoogle}>Sign In With Google</button>
        </div>
    );
}
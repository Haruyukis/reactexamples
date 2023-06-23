import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    // Creating a navbar to navigate through the site.

    const [user] = useAuthState(auth);

    // ⚠️ Sign Out function.

    const signUserOut = async () => {
        await signOut(auth);
    }

    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/login">Login </Link>
            {/* ⚠️ Displaying the current user information. */}
            {user &&
                <div>
                    <p>{user?.displayName}</p>
                    <p><img src={user?.photoURL || "" } width="100" height="100"/></p>
                    <button onClick={signUserOut}>Log Out</button>
                </div>
            } 
        </div>
    );
}
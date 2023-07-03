import { useContext } from "react";
import { AppContext, AppContextType } from "../App";

export const Home = () : JSX.Element => {

    const { username } = useContext(AppContext) as AppContextType; // ⚠️ How to unwrap the data "username" from the AppContext.

    return (
        <div>
            <h1>This is the home page.</h1>
            <h1>Welcome {username}</h1>
        </div>
    );
}
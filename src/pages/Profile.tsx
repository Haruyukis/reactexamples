import { useContext } from "react";
import { AppContext, AppContextType } from "../App";
import { ChangeProfile } from "../ChangeProfile";

export const Profile = () : JSX.Element =>  {

    const { username } = useContext(AppContext) as AppContextType

    return (
        <div>
            <h1>This is the profile page.</h1>
            <h1> Hi { username }</h1>
            <ChangeProfile />
        </div>
    );
}
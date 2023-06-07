import {ChangeProfile} from "../ChangeProfile.js"
import { AppContext } from "../App.js";
import { useContext } from "react";


export const Profile = () => {
    const {username} = useContext(AppContext);

    return (
    <div>
        <h1>This is the profile page : {username}</h1>
        <ChangeProfile />
    </div>
    );
};
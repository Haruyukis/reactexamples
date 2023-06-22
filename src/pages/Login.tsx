import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, login, logout } from "../store";

export const Login = () : JSX.Element => {

    const [newUsername, setNewUsername] = useState<string>("");
    
    const dispatch = useDispatch();
    const username = useSelector((state: RootState) => state.user.value.username);
    
    const handleNewUsernameInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setNewUsername(event.target.value);
    };

    return (
        <div>
            <h1>This is the login page.</h1>
            <h1>{username}</h1>
            <input onChange={handleNewUsernameInput} placeholder="Username"/>
            <button onClick={() => dispatch(login({username: newUsername}))}>Submit Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    );
}
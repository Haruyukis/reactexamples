import { useState, useContext } from "react";
import { AppContext, AppContextType } from "./App";

export const ChangeProfile = () : JSX.Element => {

    const { setUsername } = useContext(AppContext) as AppContextType; // ⚠️ How to use a context.

    const [newUsername, setNewUsername] = useState<string>("");

    const handleNewUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewUsername(event.target.value);
    }

    return (
        <div>
            <input onChange={handleNewUsername}placeholder="Change Username..."/>
            <button onClick={() => {
                setUsername(newUsername);
            }}>
                Update Username
            </button> 
        </div>
    );
}
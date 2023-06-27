import { getDocs, collection } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from "../../config/firebase";
import { useState, useEffect } from "react";
import { Post } from "./post";

export interface IPost{
    id: string;
    description: string;
    title: string;
    userId : string;
    username: string;
}

export const Main = () : JSX.Element => {

    // Looping to each element of the collection posts and stocking in inside of a list.

    const [ postsList, setPostsList ] = useState<IPost[] | null>(null)

    const postsRef = collection(db, "posts");

    const getPost = async () => {
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as IPost[])
    }

    const [user] = useAuthState(auth);

    useEffect(() => {
        user && getPost();
    })

    return (
        <div>
            {postsList?.map((post) => <Post post={post}/>)}
        </div>
    );
}
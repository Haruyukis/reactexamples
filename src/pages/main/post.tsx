import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { IPost } from "./main";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props{
    post: IPost;
}

interface Like{
    userId: string;
}

export const Post = (props : Props) : JSX.Element => {

    const [user] = useAuthState(auth);

    // ⚠️ Liking system.

    // Adding like in the db.
    const likesRef = collection(db, "likes") ;

    const addLike = async () => {
        user && await addDoc(likesRef, {postsId: props.post.id, userId: user.uid})
    }

    // Handle the number of like and the unicity of a like for one post.

    const [likes, setLikes] = useState<Like[] | null> (null);

    const likesDoc = query(likesRef, where("postsId", "==", props.post.id));
    
    const handleLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => doc.data().userId) as Like[]);
    };

    useEffect(() => {
        handleLikes();
    })

    return (// ⚠️ Display all element of a post and all the likes.
        <div>
            <div className="title">
                <h1>{props.post.title}</h1>
            </div>
            <div className="body">
                <p>{props.post.description}</p>
            </div>
            <div className="footer">
                <p>@{props.post.username}</p>
                <button onClick={addLike}>&#128077;</button>
                <p>{likes && "Likes : " + likes.length}</p>
            </div>
        </div>
    );
}
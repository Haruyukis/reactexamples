import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { IPost } from "./main";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props{
    post: IPost;
}

interface Like{
    userId: string;
    likeId: string;
}

export const Post = (props : Props) : JSX.Element => {

    const [user] = useAuthState(auth);

    // ⚠️ Liking system.

    const likesRef = collection(db, "likes") ;
    const [likes, setLikes] = useState<Like[] | null> (null);

    // Adding like in the db.

    const addLike = async () => {
        try {
            const likeDoc = await addDoc(likesRef, {postsId: props.post.id, userId: user?.uid})
            if (user) {
            setLikes((prev) => prev ? [...prev, {userId : user.uid, likeId: likeDoc.id}] : [{userId: user.uid, likeId: likeDoc.id}]);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // Removing like in the db.s

    const removeLike = async () => {
        try {

            const unlikeQuery = query(likesRef, where("postsId", "==", props.post.id), where("userId", "==", user?.uid))
            const unlikeData = await getDocs(unlikeQuery);
            const unlikeDocId = unlikeData.docs[0].id
            const unlikeDoc = doc(db, "likes", unlikeDocId);
            await deleteDoc(unlikeDoc);
            if (user) {
                setLikes((prev) => prev && prev.filter((like) => like.likeId !== unlikeDocId));
            }
        } catch (err) {
            console.log(err);
        }
    }

    // Handle the number of like and the unicity of a like for one post.

    const likesDoc = query(likesRef, where("postsId", "==", props.post.id));
    
    const handleLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => ({userId : doc.data().userId, likeId: doc.id})));
    };

    const hasUserLiked = likes?.find((like) => like.userId === user?.uid);

    useEffect(() => {
        handleLikes();
    }, [])

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
                <button onClick={hasUserLiked ? removeLike : addLike}>{hasUserLiked ?<>&#128078;</> : <>&#128077;</>}</button>
                <p>{likes && "Likes : " + likes.length}</p>
            </div>
        </div>
    );
}
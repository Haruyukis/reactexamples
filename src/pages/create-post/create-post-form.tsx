import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { db, auth } from "../../config/firebase";

interface PostDataType{
    title: string;
    description: string;
}

export const CreatePostForm = () : JSX.Element => {

    // Creating a schema for the data required in the form.
    const schema = yup.object().shape({
            title: yup.string().required("You must write a title."),
            description: yup.string().required("You must write a description.")
        } 
    )

    // yupResolver and Form hook.
    const {register, handleSubmit, formState: { errors } } = useForm<PostDataType>({
        resolver: yupResolver(schema)
    })

    // Initialize posts collection and user from firebase.

    const posts = collection(db, "posts");
    const [user] = useAuthState(auth);

    // Submit Handler
    const OnCreatePost = async (data : PostDataType) => {
        await addDoc(posts, {
            ...data,
            userId: user?.uid,
            username: user?.displayName
        })
    }

    return (
        <form onSubmit={handleSubmit(OnCreatePost)}>
            <input placeholder="Title..." {... register("title")} />
            <p style={{color : "red"}}>{errors.title?.message}</p>
            <textarea placeholder="Description..." {... register("description")} />
            <p style={{color : "red"}}>{errors.description?.message}</p>
            <input type="submit"/>
        </form>
    );
}

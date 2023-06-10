import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required("Your full name is required !"),
        email: yup.string().email("Your input must be a correct email !").required("Your email is required !"),
        age: yup.number().positive().min(18).integer().required("Your age is required !"),
        password: yup.string().min(4).max(20).required("You must fill a password !"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Password don't match !").required("You must confirm your password !"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age" {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password" {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" placeholder="Submit"/>
        </form>
    );
    
};
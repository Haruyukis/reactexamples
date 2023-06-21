import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {

    const schema = yup.object().shape({ // ⚠️ Schema corresponds to the conditions that the data given must respect.
        fullName: yup.string().required("A fullname is required !"),
        email: yup.string().email("Please give a valid email.").required(),
        age: yup.number().positive().min(18).integer().required("Your age is required !"),
        password: yup.string().min(4).max(20).required("You need a password !"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Password doesn't match !").required("You need to confirm your password !"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm({ // ⚠️ register give the link between each key of schema and each input.
        resolver: yupResolver(schema), // ⚠️ yupResolver allows the site to verify if the data given respect the schema.
    });

    const onSubmit = (data: object) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p> {/* ⚠️ Display the error message given for fullName */}
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number"placeholder="Age..." {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    );

}

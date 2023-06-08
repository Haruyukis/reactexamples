import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {

    const { data, refetch, isLoading} = useQuery(["cat"], (() => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    }));

    if (isLoading){
        return <h1>Loading...</h1>
    };

    return (
        <div>
            <h1>Welcome, this is the home page.</h1>
            <p>{data?.fact}</p>
            <button onClick={refetch}>Update Data</button>
        </div>
    );
};
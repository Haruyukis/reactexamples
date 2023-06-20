import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const CatData = () : JSX.Element => {

    const { data, isLoading, error, refetch } = useQuery(["cat"], () => { // ⚠️ Usage of Query Client.
        return Axios.get("https://catfact.ninja/fact").then((res) => {
            return res.data;
        })
    })

    if (isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{data?.fact}</h1>
            <button onClick={() => refetch()}>Refech Data</button>
        </div>
    );
}
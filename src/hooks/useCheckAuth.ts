import { useState } from "react"
import { useAxiosPrivate } from "./useAxiosPrivate";

export const useCheckAuth = () => {
    const [error, setError] = useState();
    const axiosPrivateInstance = useAxiosPrivate();
    
    const checkAuth = async () => {
        try{
            const response = await axiosPrivateInstance.get("/refresh");
            return response;
        }catch(error: any){
            setError(error);
        }
    }

    return { checkAuth, error };
}
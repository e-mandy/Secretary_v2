import { useAxiosPrivate } from "./useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";



export const useCheckAuth = () => {
    const axiosPrivateInstance = useAxiosPrivate();
    
    const check = async() => {
        const response = await axiosPrivateInstance.get('/refresh');
        return response.data;
    }

    return useQuery({
        queryKey: ['user'],
        queryFn: check,
        throwOnError: true,
    });
}
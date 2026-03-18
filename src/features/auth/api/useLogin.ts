import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../api/axiosInstance";
import type { LoginUser } from "../schemas/login.schema";
import type { UserApiResponse } from "../schemas/auth_store.schema";
import { useAuthStore } from "../store/auth.store";


const login = async(user: LoginUser) => {
    const response = await axiosInstance.post('/secretary/login', user);
    return response.data;
}

const useLogin = () => {
    const { setAuthStore } = useAuthStore();

    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            const user: UserApiResponse = {
                user: data.user,
                token: data.token
            };
            setAuthStore(user);   
        }
    });
}

export default useLogin;
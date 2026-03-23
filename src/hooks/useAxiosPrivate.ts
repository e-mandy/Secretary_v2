import { useLayoutEffect } from "react"
import { useAuthStore } from "../features/auth/store/auth.store";
import { axiosPrivateInstance } from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export const useAxiosPrivate = () => {
    const { token } = useAuthStore();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const requestIntercetor = axiosPrivateInstance.interceptors.request.use(
            config => {
                if(!config.headers["Authorization"]){
                    config.headers["Authorization"] = `Bearer ${token}`
                }

                return config;
            }, 
            // The error parameter is used to reject the request when it automatically fail.
            (error) => Promise.reject(error)
        );

        const responseInterceptor = axiosPrivateInstance.interceptors.response.use(
            response => response,
            (error) => {
                if(error?.response?.status === 401){
                    // We have to remove the token from the cookie

                    // Redirect on the login page.
                    navigate('/secretary/login', {
                        replace: true
                    });
                }
                return Promise.reject(error)
            }
        );

        return () => {
            axiosPrivateInstance.interceptors.request.eject(requestIntercetor);
            axiosPrivateInstance.interceptors.response.eject(responseInterceptor);
        }
    }, [token]);

    return axiosPrivateInstance;
}
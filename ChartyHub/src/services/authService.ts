import LoginFormValues from "@/types/LoginFormValues";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// console.log(import.meta.env);
// console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);
const login = async (data: LoginFormValues) => {
    
    const response = await axios.post(`${API_BASE_URL}/user/login`, data);
    return response.data
};

const useLogin = () => {
    return useMutation({
        mutationFn: login,
    });
};

export default useLogin;
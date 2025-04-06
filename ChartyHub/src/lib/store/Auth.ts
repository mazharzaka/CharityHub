import { create } from "zustand"
import { jwtDecode } from "jwt-decode";
import { createUser } from "@/services/apiService";
import { IUser } from "@/types/User";

interface AuthState {
    token: string | null;
    user: any | null;
    loginStore: (token: string | null) => void;
    logout: () => void;
    createUser: (user: any) => void;
}


const Store = create<AuthState>((set) => ({
    token: localStorage.getItem("token") || null,
    user: localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token") as string) : null,
    loginStore: async (token) => {
        try {
            const decoded = token && jwtDecode(token);
            // console.log(decoded);

            set({ token: token, user: decoded });
        } catch (err) {
            console.log(err);

        }
    },
    logout: () => {
        console.log("logout");
        
        localStorage.removeItem("token")
        set({ token: null, user: null });

    },
    createUser:async (user:IUser) => {
        try{
         await createUser(user)
            console.log("User created successfully");
        }
        catch(err){
            console.log("Error creating user", err);
        }
    }
}));
export default Store
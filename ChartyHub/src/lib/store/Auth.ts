import { create } from "zustand"
import { jwtDecode } from "jwt-decode";

interface AuthState {
    token: string | null;
    user: any | null;
    loginStore: (token: string | null) => void;
    logout: () => void;
}


const Store = create<AuthState>((set) => ({
    token: localStorage.getItem("token") || null,
    user: localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token") as string) : null,
    loginStore: async (token) => {
        try {
            const decoded = token && jwtDecode(token);
            console.log(decoded);

            set({ token: token, user: decoded });
        } catch (err) {
            console.log(err);

        }
    },
    logout: () => {
        localStorage.removeItem("token")
        set({ token: null, user: null });

    }
}));
export default Store
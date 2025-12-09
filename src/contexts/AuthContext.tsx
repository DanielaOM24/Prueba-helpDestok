
"use client";

import { createContext, useContext, useState, type ReactNode, } from "react";

import type { LoginForm, RegisterForm, User, } from "@/types";


interface AuthContextValue {
    user: User | null;
    loading: boolean;
    login: (credentials: LoginForm) => Promise<void>;
    register: (payload: RegisterForm) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);


export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);


    const login = async (_credentials: LoginForm) => {
        throw new Error("login no implementado");
    };

    const register = async (_payload: RegisterForm) => {
        throw new Error("register no implementado");
    };

    const logout = async () => {
        throw new Error("logout no implementado");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("useAuth debe usarse dentro de AuthProvider");
    }
    return ctx;
}

// @contexts/AuthContext.tsx

"use client"
import { createContext, useEffect, useState, ReactNode } from "react";
import { iAuthContext, iProduto } from "@/types/context";
import data from "@/database/products.json"

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [Product, setProduct] = useState<iProduto[]>([]);

    useEffect(() => {
        setProduct(data);
    }, []); 

    return (
        <AuthContext.Provider value={{ Product }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
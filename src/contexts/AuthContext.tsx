// @contexts/AuthContext.tsx

"use client"
import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { iAuthContext, iProduto } from "@/types/context";
import { useRouter } from "next/navigation";
import { iSingin, iSinginData, iSingUpData, iUser } from "@/types/userAccessValidatons";
import { resolve } from "path";
import { login } from "@/service/login.service";
import { api } from "@/service/api";
import { register } from "@/service/register.service";
import { toast } from "react-toastify";

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [Product, setProduct] = useState<iProduto[]>([]);


   // criando função de signIn
   const [isLogged, setIsLogged] = useState<boolean>(false);
   useEffect(() => { setIsLogged(JSON.parse(localStorage.getItem("isLogged") as string)); }, []);

   const router = useRouter();
   const [user, setUser] = useState<iUser>({} as iUser);


   const signIn = async  (values: iSinginData) => {
    try{
        const response = await login(values)
        console.log(response) 
        setIsLogged(true)
        localStorage.setItem("isLogged", "true" )
        api.defaults.headers["Authorization"] = `Bearer${response.accessToken}`
        localStorage.setItem("@Token", response.accessToken)
        setUser(response.user)
        localStorage.setItem("user", JSON.stringify(response.user))
        toast.success( "Login Concluido Com Sucesso " )
        router.push("/")
    }catch(error) { 
        console.log(error)
        toast.error("Algo Deu Errado")
    }
   };
   
   const iSingUp = async  (values: iSingUpData) => {
    try{
        const response = await register(values)
        router.push("/login")
        toast.success( "Cadastro Realizado Com Sucesso" )
    }catch(error) { 
        console.log(error)
        toast.error("Algo Deu Errado")
    }
   };

   

   // Buscar o localstorage

   useEffect(() => {
       const userStorage = localStorage.getItem("user");
       if (userStorage) {
           setUser(JSON.parse(userStorage));
       }
   }, []);
   // apagando local storage

   const logout = () => {
       localStorage.clear();
       setIsLogged(false);
       setUser({} as iUser);
       router.push("/login");
   };


    return (
        <AuthContext.Provider value={{ Product,
            signIn,
            user, 
            isLogged, 
            logout,
            iSingUp

        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
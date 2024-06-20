import { createContext, useState } from "react";
import { iAuthContext } from "@/types/context";
import { useRouter } from "next/navigation";
import { iSingUp, iSingin, iUser } from "@/types/userAccessValidatons";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [ User, setUser ] = useState<iUser>({} as iUser);

    const singIn = (value: iSingin) => {
        return new Promise((resolve) => {
            resolve(true);

            localStorage.setItem("IsLogged", "true");

            const response = login(values);
        })

    }

}
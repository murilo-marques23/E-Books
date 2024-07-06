import { iSinginData } from "@/types/userAccessValidatons";
import { api } from "./api";

export const login = async (values: iSinginData) => {
    const {data} = await api.post("/login", values)
    return data 
}


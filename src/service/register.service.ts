import { iSingUpData } from "@/types/userAccessValidatons";
import { api } from "./api";

export const register = async (values: iSingUpData) => {
    const {data} = await api.post("/signup", {
        ...values,
        password_confirmation: values.password
    });
    return data 
}

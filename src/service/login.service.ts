import { iSinginData } from "@/types/userAccessValidatons";
import { api } from "./api";
import { jwtDecode } from "jwt-decode";

export const login = async (values: iSinginData) => {
    const {data} = await api.post("/singin", values);
    return data;
};


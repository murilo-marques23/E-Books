import { iProductResponseProps } from "@/types/cadastroproduct";
import { api } from "./api";

export const createStore = async(productdata: iProductResponseProps ): Promise<iProductResponseProps> => {
    const Token = localStorage.getItem("token")
    const headers = Token ? {
        Authorization: `Bearer${Token}`
        
    } : {}
    
    const { data } = await api.post("/cadastro-loja", productdata, {headers} ) 
    return data 
}

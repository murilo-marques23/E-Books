import { api } from "./api"

export const getProducts = async () => {
    // metodo get pega todos os itens da minha api 
    const {data} = await api.get("/loja")
    return data;
    
}
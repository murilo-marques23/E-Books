import { api } from "./api"

interface ProductsParamProps{
    page?:number;
    per_page?:number
}

export const getProducts = async () => {
    // metodo get pega todos os itens da minha api 
    const {data} = await api.get(`/books`);
    return data
    
}
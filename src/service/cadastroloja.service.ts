import { iProductResponseProps } from "@/types/cadastroproduct";
import { api } from "./api";

export const createStore = async ({
    nome,
    img,
    autor,
    preco,
    score,
}: iProductResponseProps): Promise<iProductResponseProps> => {
    const Token = localStorage.getItem("@Token");
    const headers = Token
    ? {
        Authorization: `Bearer ${Token}`,
    }
    : {};

    const body = new FormData();
    body.append('nome', nome);
    body.append('autor', autor);
    body.append('preco', (preco*100).toString());
    body.append('score', score.toString());
    body.append('img', img);

    const { data } = await api.post("/books", body, { headers });
    return data;
};

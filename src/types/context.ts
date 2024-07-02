import { iUser } from "./userAccessValidatons";
import { iSingin } from "./userAccessValidatons";



export interface iAuthContext {
    Product: iProduto[]
}

export interface iProduto {
    id: number,
    nome: string,
    img: string,
    autor: string,
    preço: number,
    score: number,
}
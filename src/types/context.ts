import { iSinginData, iSingUpData, iUser } from "./userAccessValidatons";
import { iSingin } from "./userAccessValidatons";



export interface iAuthContext {
    Product: iProduto[];
    signIn: (value: iSinginData) => void
    iSingUp: (value: iSingUpData) => void
    user: iUser
    isLogged: boolean;
    logout: () => void;
}

export interface iProduto {
    id: number,
    nome: string,
    img: string,
    autor: string,
    preco: number,
    score: number,
}

export interface iProductCartProps extends iProduto {
    amount: number
}

export interface ICartContext {
    addProduct:(product: iProductCartProps) => void
    cart: iProductCartProps[]
    removeProduct:(id: number) => void
    totalCart: number
    clearCart: () => void
}
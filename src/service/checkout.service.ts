import { iCartProps } from "@/componentes/Cart";
import { api } from "./api";
import { iProductCartProps } from "@/types/context";

interface CheckoutProps{
    id: number
    amount: number;
}

export const checkout = async (id:number):Promise<string> => {
    const Token = localStorage.getItem("@Token");
    const headers = Token
    ? {
        Authorization: `Bearer ${Token}`,
    }
    : {};
    const { data } = await api.put(`/orders/${id}/payment`, null,{ headers });
    return data.payment_url;

};

export const orders = async(cart:CheckoutProps[]): Promise<number> => {
    const Token = localStorage.getItem("@Token");
    const headers = Token
    ? {
        Authorization: `Bearer ${Token}`,
    }
    : {};
    console.log(cart);
    const body = {
        payment_method: "Pix",
        books:cart.map((item:CheckoutProps) => ({
            productId:item.id,
            quantity: item.amount,
        })),
    };
    const { data } = await api.post("/orders", body, { headers });
    return data.id;

}
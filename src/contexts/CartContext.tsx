
import { ICartContext, iProductCartProps } from "@/types/context";
import { useToast } from "@chakra-ui/react";
import { createContext, use, useContext, useMemo, useState } from "react";

export const CardContext = createContext({} as ICartContext);

const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const toast = useToast();
  // vou criar um estado para armazenar os produtos do carrinho
  const [cart, setCart] = useState<iProductCartProps[]>([]);
  // vou criar uma função para adicionar um produto ao carrinho pelo id so que tenho verifcar se esse produto ja existe no carrinho se existee ele vai aumetar no meu amount +1
  const addProduct = (product: iProductCartProps) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex === -1) {
      setCart([...cart, { ...product, amount: 1 }]);
      toast({
        title: "Sucesso",
        description: "Adicionado No Carrinho Com Sucesso",
        status: "success",
        duration: 5000,
        isClosable: true,
    });
    } else {
      cart[productIndex].amount += 1;
      setCart([...cart]);
      toast({
        title: "Sucesso",
        description: "Adicionado No Carrinho Com Sucesso",
        status: "success",
        duration: 5000,
        isClosable: true,
    });
    } 
  };

  //   criando funncao para remover um produto do carrinho

  const removeProduct = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast({
      title: "Sucesso",
      description: "Removido do  Carrinho Com Sucesso",
      status: "success",
      duration: 5000,
      isClosable: true,
  });
  };

  //   fazer const do total do carrinho usando usememo

  const totalCart = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.preco * item.amount, 0);
  }, [cart]);

  return (
    <CardContext.Provider
      value={{ totalCart, cart, addProduct, removeProduct }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;

export const useCart = () => useContext(CardContext);
"use client"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Flex,
    Text,
    Stack,
    Heading,
    useToast,
  } from '@chakra-ui/react'
import CartProduct from '../CartProduct';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import { checkout, orders } from '@/service/checkout.service';

import { useState } from 'react';


export interface iCartProps {
    isOpen: boolean,
    onClose: () => void,
}

const Cart: React.FC<iCartProps> = ({
    isOpen, 
    onClose
}) => {
    const { cart, totalCart, clearCart } = useCart();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const toast = useToast();
    const handleCheckout = () => {
    onClose();
    handleSubmit();


  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    try {
        const orderId = await orders(cart);
        const url = await checkout(orderId);
        clearCart();
        setIsSuccess(true);
        

        toast({
            title: "Compra realizada com sucesso!",
            description: "Obrigado por comprar conosco",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        window.open(url, "_blank");
    }catch (e:any){
        toast({
            title: "Oops Algo deu errado!",
            description: `Mensagem do erro ${e.message}`,
            status: "error",
            duration: 5000,
            isClosable: true,
        });
        console.error(e);
    }finally{
        setIsLoading(false);
    }
};
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Carrinho De Compras </DrawerHeader>
  
            <DrawerBody>
            <Stack>
            {cart && cart.length > 0 ? (
              cart.map((product) => (
                <CartProduct key={product.id} {...product} />
              ))
            ) : (
              <Heading as="h3" size="md">
                Carrinho vazio
              </Heading>
            )}
          </Stack>

            </DrawerBody>
  
            <DrawerFooter flexDir="column">
          <Flex w="100%" justify="space-between">
            <Text>Total:</Text>
            <Text> {(totalCart/100).toLocaleString("PT-BR", {style: "currency", "currency":"BRL"})} </Text>
          </Flex>
          <Button
            bgColor="green"
            color="white"
            w="100%"
            mt="2rem"
            _hover={{ bgColor: "green.400" }}
            onClick={handleCheckout}
          >
            Finalizar compra
          </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default Cart; 
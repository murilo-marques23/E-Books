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
    Input,
    Flex,
    Text,
    Stack,
    Heading,
  } from '@chakra-ui/react'
import CartProduct from '../CartProduct';
import { useCart } from '@/contexts/CartContext';

export interface iCartProps {
    isOpen: boolean,
    onClose: () => void,
}

const Cart: React.FC<iCartProps> = ({
    isOpen, 
    onClose
}) => {
    const { cart, totalCart } = useCart();
  
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
          </Flex>
          <Button
            bgColor="green"
            color="white"
            w="100%"
            mt="2rem"
            _hover={{ bgColor: "green.400" }}
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
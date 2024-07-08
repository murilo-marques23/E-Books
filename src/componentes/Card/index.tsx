"use client"
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { FaRegStar } from "react-icons/fa";
import { iProduto } from "@/types/context";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

interface CardProps {
    products: iProduto[];
}

const Card: React.FC<CardProps> = ({ products }) => {
    const { addProduct } = useCart();
    const [amount, setAmount] = useState(1);

    return (
        <>
            {products.map((Product: iProduto) => (
                <Box
                    key={Product.id}
                    boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    h="450px"
                    w="380px"
                    mt="3rem"
                    borderRadius="8px"
                    ml="1rem"
                    _hover={{
                        transform: "scale(1.02)",
                        boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
                    }}
                >
                    <Flex
                        flexDirection="column"
                        gap="1rem"
                        flexWrap="wrap"
                    >
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Image
                                w="200px"
                                h="200px"
                                src={Product.img}
                                alt="Produto"
                                marginTop="8px"
                            />
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Text fontSize="18px" fontWeight="500">
                                {Product.nome}
                            </Text>
                        </Box>

                        <Box display="flex" marginLeft="30px">
                            <Text>
                                {Product.autor}
                            </Text>
                        </Box>

                        <Box display="flex" marginLeft="30px">
                            <Text>
                                R$: {Product.preço.toFixed(2).replace(".", ",")}
                            </Text>
                        </Box>

                        <Box display="flex" gap="10px" marginLeft="40px">
                            <Text display="flex" flexDirection="column">
                                {Product.score}
                            </Text>
                            <Box color="yellow">
                                <FaRegStar />
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Button 
                                variant='link'
                                color="black"
                                onClick={() => addProduct({ ...Product, amount })}
                            >
                                Adicionar ao Carrinho
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            ))}
        </>
    );
}

export default Card;
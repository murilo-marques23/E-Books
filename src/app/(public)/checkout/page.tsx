"use client"

import { useCart } from "@/contexts/CartContext";
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, useToast, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Checkout() {
    const { cart, totalCart, clearCart } = useCart();
    const [form, setForm] = useState({ name: '', email: '', address: '', cep: '', complemento: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const toast = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            clearCart();
            setIsLoading(false);
            setIsSuccess(true);
            toast({
                title: "Compra realizada com sucesso!",
                description: "Obrigado por comprar conosco.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }, 2000); // Simula uma requisição de 2 segundos
    };

    return (
        <Box p={8} h={ isSuccess ? "53vh" : "75vh"}>
            <Heading as="h2" size="xl" mb={8} >Checkout</Heading>
            {isSuccess ? (
                <Text color="blue.500" fontWeight="bold" mt={4}>
                    Compra finalizada com sucesso!
                </Text>
            ) : (
                <Stack spacing={4}>
                    <FormControl id="name">
                        <FormLabel>Nome</FormLabel>
                        <Input type="text" name="name" placeholder="Digite o seu nome" value={form.name} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="email" placeholder="Digite o seu Email" value={form.email} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="cep">
                        <FormLabel>CEP</FormLabel>
                        <Input type="text" name="cep" placeholder="Digite o seu CEP" value={form.cep} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="address">
                        <FormLabel>Endereço</FormLabel>
                        <Input type="text" name="address" placeholder="Digite o seu Endereço " value={form.address} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="Complemento">
                        <FormLabel>Complemento</FormLabel>
                        <Input type="text" name="complemento" placeholder="Ex:Casa/Apartamento,Quadra,Lote ou Bloco " value={form.complemento} onChange={handleChange} />
                    </FormControl>
                    <Text>Total: {totalCart}</Text>
                    <Button
                        colorScheme="green"
                        onClick={handleSubmit}
                        isLoading={isLoading}
                        disabled={isSuccess}
                    >
                        Finalizar Compra
                    </Button>
                </Stack>
            )}
        </Box>
    );
}
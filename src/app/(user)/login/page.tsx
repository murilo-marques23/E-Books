'use client';
import { LoginValidation } from "@/validation/userAcess.Validation";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iSingin } from "@/types/userAccessValidatons";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
    const { signIn } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<iSingin>({
        resolver: yupResolver(LoginValidation),
    });

    const handlesingIn = (values: iSingin) => {
        signIn({
            email: values.email,
            password: values.senha
        })
    }

    return (
        <>
            <Box fontSize={{ base: "26px", md: "40px"}} fontWeight="400" padding="0 5%">
                <Text
                    color="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt="18px"
                    
                >
                    Seja Bem Vindo Novamente!
                </Text>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center" padding="0 5%">
                <Box
                    as="form"
                    onSubmit={handleSubmit(handlesingIn)}
                    bg="gray.50"
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="20px"
                    w="600px"
                    h="400px"
                    borderRadius="10px"
                    mt="40px"
                    p="20px" // Adiciona padding ao contêiner do formulário
                >
                    <FormControl isInvalid={!!errors.email} w="100%">
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Digite seu e-mail"
                            w="100%"
                            p="10px" // Adiciona padding ao input
                            {...register("email")}
                        />
                        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.senha} w="100%">
                        <FormLabel>Senha</FormLabel>
                        <Input
                            type="password"
                            placeholder="Digite sua senha"
                            w="100%"
                            p="10px" // Adiciona padding ao input
                            {...register("senha")}
                        />
                        <FormErrorMessage>{errors.senha?.message}</FormErrorMessage>
                    </FormControl>

                    <Button type="submit" bg="blue.500" color="white" w="100%">
                        Entrar
                    </Button>
                </Box>
            </Box>
        </>
    );
}
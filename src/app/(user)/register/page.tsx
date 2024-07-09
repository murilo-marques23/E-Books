'use client'
import { useAuth } from "@/contexts/AuthContext";
import { iSingin, iSingUp, iSingUpData } from "@/types/userAccessValidatons";
import { LoginValidation, RegisterValidation } from "@/validation/userAcess.Validation";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import { Link } from '@chakra-ui/react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


export default function Register () {
    const { iSingUp } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(RegisterValidation),
    });

    const handlesingUp = (values: iSingUp) => {
        iSingUp({
            name: values.nome,
            email: values.email,
            password: values.senha
        })
    }
    
    return(
        <>
            

            <Box display="flex" justifyContent="center" alignItems="center" flexDir="column">
            <Box fontSize="40" fontWeight="400">
                <Text
                    color="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt="18px"
                >
                    Seja Bem Vindo, Faça Seu Cadastro!
                </Text>
            </Box>
                <Box
                    as="form" 
                    onSubmit={handleSubmit(handlesingUp)}                 
                    bg="gray.50"
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="20px"
                    w="600px"
                    h="600px"
                    borderRadius="10px"
                    mt="30px"
                    p="20px" // Adiciona padding ao contêiner do formulário
                >
                    <FormControl isInvalid={!!errors.nome} w="100%">
                        <FormLabel>Usuario</FormLabel>
                        <Input
                            type="text"
                            placeholder="Digite seu Nome"
                            w="100%"
                            p="10px" // Adiciona padding ao input
                            {...register("nome")}
                        />
                        <FormErrorMessage>{errors.nome?.message}</FormErrorMessage>
                    </FormControl>

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

                    <FormControl isInvalid={!!errors.confirmacaosenha} w="100%">
                        <FormLabel>Confirmação De Senha</FormLabel>
                        <Input
                            type="password"
                            placeholder="Confirme Sua Senha"
                            w="100%"
                            p="10px" // Adiciona padding ao input
                            {...register("confirmacaosenha")}
                        />
                        <FormErrorMessage>{errors.confirmacaosenha?.message}</FormErrorMessage>
                    </FormControl>

                    <Button type="submit" bg="blue.500" color="white" w="100%">
                        Confirmar Cadastro
                    </Button>
                <small 
        style={{
            display: "flex",
            flexDirection: "column",
            gap:"5px",
            fontWeight: "700"
        }}>Ja Possui um Login? 
            <Link color="purple" href="/login">Acesse Ja!</Link>

        </small>
                </Box>
            </Box>

       
        </>

    )

}

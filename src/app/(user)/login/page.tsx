'use client';
import { LoginValidation } from "@/validation/userAcess.Validation";
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { iSingin } from "@/types/userAccessValidatons";
import { isErrored } from "stream";



export default function Login() {
    const [ input, setInput ] = useState("")
    const { register, handleSubmit,  formState: { errors } } = useForm<iSingin>({
        resolver: yupResolver(LoginValidation),
    }); 


    return (
        <>

        <Box
        fontSize="40"
        fontWeight="400">
        <Text
         color= "white"
         display="flex"
        justifyContent="center"
        alignItems="center"
        mt= "18px">Seja Bem Vindo Novamente! </Text>
        </Box>

        <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        >

            <FormControl onSubmit={handleSubmit(singIn)}
            bg= "gray.50"
            display= "flex"
            flexDir= "column"
            justifyContent="center"
            alignItems="center"
            gap="80px"
            w= "600px"
            h= "400px"
            borderRadius="10px"
            mt= "40px"
            >
                <Box>
                <FormLabel>Email</FormLabel>
                <Input type='email'
                placeholder="Digite seu e-mail"
                w="350px"
                {...register("email")}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </Box>

                <Box>
                <FormLabel>Senha</FormLabel>
                <Input type="password"
                placeholder="Digite sua senha"
                w="350px"
                {...register("senha")}
                />
                <FormErrorMessage>{errors.senha?.message}</FormErrorMessage>
              
                </Box>

                <Button type="submit"
                bg="none">
                    Entrar
                </Button>
                
            </FormControl>
        </Box>

        </>
    )
}
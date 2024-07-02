import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";
import { Link } from '@chakra-ui/react'


export default function Login () {
    
    return(
        <>

        <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        w="500px"
        h="700px"
        gap= "15px"
        borderRadius="10px"
        bg= "gray.50">
            <Text
            fontSize="20px"
            fontWeight="600"
            >Seja Bem Vindo!</Text>
        
            <Box>
        <FormLabel>Usuário</FormLabel>
        <Input type="Text"
        placeholder="Coloque aqui o seu Usuario"
        ></Input>
            </Box>  

            <Box>
        <FormLabel>E-mail</FormLabel>
        <Input type="Text"
        placeholder="Coloque aqui o seu E-mail"
        ></Input>
            </Box>   

            <Box>
        <FormLabel>Confirmar E-mail</FormLabel>
        <Input type="Text"
        placeholder="Confirme o seu E-mail"
        ></Input>
            </Box>   

            <Box>
        <FormLabel>Senha</FormLabel>
        <Input type="Text"
        placeholder="Coloque aqui a sua Senha"
        ></Input>
            </Box>


            <Box>
        <FormLabel>Confirme a sua senha</FormLabel>
        <Input type="Text"
        placeholder="Confirme aqui sua senha"
        ></Input>


            </Box>
        <Box>
        <Button type="submit"
        variant='link'
        w="200px"
        h="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="black"
        fontWeight="600"
        borderRadius="8px"
        >Confirme o seu cadastro</Button>

        </Box>
        
          
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
        </>

    )

}
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { FaRegStar } from "react-icons/fa";


export interface iCardBooksProps {
    id: number
    nome: string
    img: string
    preco: number
    nota: number
}

const Card: React.FC<iCardBooksProps> = ({
    id,
    nome,
    img,
    preco,
    nota,
}) => {
    return(
        <Box
        boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"
        h= "340px"
        w= "250px"
        mt= "3rem"
        borderRadius= "8px"
        ml="1rem"
        _hover={{
            transform: "scale(1.02)",
            boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
        }}
        
        >
            <Flex flexDirection= "column"
            alignItems="center"
            justifyContent="center" 
            gap="1rem"
            flexWrap= "wrap"
            >
                <Box>
                    <Image
                    w="200px"
                    h="200px"
                    src= {img}
                    alt="Livros"
                    />

                </Box>
                
                <Box>
                <Text>
                    {nome}
                </Text>
                </Box>
                <Box>
                    <Text>
                        R$:{preco}
                    </Text>
                </Box>

                <Box display= "flex"
                gap= "10px" 
                alignItems="center"
                
                >
                    <Text display="flex" flexDirection="column">
                        {nota}
                    </Text>
                    <Box color= "yellow" >
                        <FaRegStar /> 
                    </Box>
                </Box>

            </Flex>
 
        </Box>

    )
}

export default Card
import { Box, Heading, Text } from "@chakra-ui/react";

interface iBannerProps {
    src: string;
}


const Banner: React.FC<iBannerProps> = ({ src }) => {
    return(
        <Box
        backgroundImage={`url(${src})`}
        h = "355px"
        w="100%"
        boxShadow= "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"
        >
        <Heading
        color="white"
        fontSize= "55px"
        textAlign="center"
        paddingTop="70px"
        >
            Encontre Os Seus Livros Favoritos Aqui 
        </Heading>
        <Text as = "p" 
        color="white"
        fontSize= "35px"
        textAlign="center"
        paddingTop="10px"     
        >
            Oque Você quer Ler Hoje?
        </Text>

        </Box>

    )
}


export default Banner;
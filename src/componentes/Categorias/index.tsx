import { Box, Flex, Image } from "@chakra-ui/react"


export interface iCategoriasProps {
    img: string,
    categoria: string,
    link: string,
}

const Categorias: React.FC<iCategoriasProps> = ({
    img,
    categoria,
    link,
}) => {
    return (
        <Flex>
            <Box
            w= "300px"
            h= "150px"
            bg= "10px"
            boxShadow= "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
            >
                {link}
                <Image 
                alt="s"
                src={img}
                />
            <Box>
                {categoria}
            </Box>
                
            </Box>


        </Flex>

    )
}

export default Categorias;
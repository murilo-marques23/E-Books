import Banner from "@/componentes/Banner";
import Card from "@/componentes/Card";
import Categorias from "@/componentes/Categorias";
import { Flex } from "@chakra-ui/react";


export default function Home() {
  return (
      <Flex as = "main" flexDirection="column">
        <Banner src = "/Banner-teste-3.png" />

          <Flex 
          flexDir= {{ base: "column", md: "row"}}>
        <Card id={0} nome={"Box Jurrasic Park"} img={"/Box-Jurrasic-Park.png"} preco={150} nota={4}
        />
        <Card id={1} nome={"Neuromancer"} img={"/Neuromancer.png"} preco={50} nota={5} 
        />
        <Card id={0} nome={"Jogador Numero 1"} img={"/Jogador-Numero 1.png"} preco={100} nota={4.5} />

          </Flex>
      </Flex>
  );
}

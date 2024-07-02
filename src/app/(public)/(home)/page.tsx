"use client"
import Banner from "@/componentes/Banner";
import Card from "@/componentes/Card";
import Categorias from "@/componentes/Categorias";
import AuthProvider from "@/contexts/AuthContext";
import { Flex } from "@chakra-ui/react";


export default function Home() {
  return (
      <>
      <Flex>
        <Banner src = "/Banner-teste-3.png" />
      </Flex>

      <Flex as = "main" >
          <Flex 
            flexWrap="wrap"
            alignItems= "center"
            justifyContent="center"
            >
            <Card/>
          </Flex>
      </Flex>
      </>
  );
}

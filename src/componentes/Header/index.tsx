'use client'
import * as S from "./header.styled"
import { FaCartShopping } from "react-icons/fa6";
import { BiArchiveIn } from "react-icons/bi";
import { PiBooksBold } from "react-icons/pi";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Cart from "../Cart";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { iProductResponseProps } from "@/types/cadastroproduct";
import { useQuery, useQueryClient } from "react-query";
import { getProducts } from "@/service/product.service";
import { createStore } from "@/service/cadastroloja.service";



const initialStoreItens: iProductResponseProps = { nome: "", img: "" , autor: "", preco: 0, score: 0 } 

const Header = () => {
    const toast = useToast();
    const { isLogged, user, logout } = useAuth();
    console.log(isLogged);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isProductOpen, onOpen: onProductOpen, onClose: onProductClose  } = useDisclosure();
    const { data: Product } = useQuery("Product", getProducts);
    const userQueryClient = useQueryClient()
    const [ newStore, setNewStore ] = useState<iProductResponseProps>(initialStoreItens);
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const{ name, value } = e.target
      setNewStore(( prevState ) => ({
        ...prevState, [ name ]: name === "preco" || name === "score" ? parseFloat( value ): value
      })) 
    },[]);
    const handleSubmit = useCallback( async() => {
      try {
        const createdStored = await createStore(newStore)
        userQueryClient.invalidateQueries("Product")
        onProductClose()
        setNewStore(initialStoreItens)
        toast({
                title: "Sucesso",
                description: "Novo Produto cadastrado com sucesso!",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
      } catch (error) {
        console.error("Erro ao Cadastrar o Produto", error)
        toast({
          title: "Erro",
          description: "Falha ao cadastrar o produto.",
          status: "error",
          duration: 5000,
          isClosable: true,
      });
      }
    },[ newStore, onProductClose, userQueryClient, toast ])
    return(
      <>
      <Cart
       onClose= {onClose}
       isOpen= {isOpen}
       />
      <S.Header>
            <S.HeaderTop>
                <p>Seja Bem Vindo a E-books</p>
                <div>
                {!isLogged ? (
                  <>
                <Link href="/login">Login</Link>
                <Link href="/register">Cadastro</Link>
              </>
            ) : (
              <>
                <p>Olá, {user.name}</p>
              </>
            )}
                </div>
                
            </S.HeaderTop>
                <S.HeaderCenter>
                    <span><PiBooksBold 
                    size={50}
                    /> E-books</span>
                    
                    <S.Nav> 
                    <Button
                    onClick={onOpen}
                    bg= "transparent"
                    >
                    <FaCartShopping />
                    Carrinho
                    </Button>

                    <Button onClick={onProductOpen}
                    >
                    <BiArchiveIn />
                    Cadastro De Produtos
                    </Button>

                    </S.Nav>
                </S.HeaderCenter>
                <Modal isOpen={isProductOpen} onClose={onProductOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Novo Produto</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input value={newStore.nome}
              onChange={handleInputChange}
                name="nome"
              
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Preço</FormLabel>
              <Input value={newStore.preco}
              onChange={handleInputChange}
                name="preco"
                type="number"
           
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Imagem</FormLabel>
              <Input value={newStore.img}
              onChange={handleInputChange}
                name="img"
            
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Autor</FormLabel>
              <Input value={newStore.autor}
              onChange={handleInputChange}
                name="autor"
          
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Score</FormLabel>
              <Input value={newStore.score}
              onChange={handleInputChange}
                name="score"
                type="number"
            
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}
            onClick={handleSubmit} >
              Cadastrar
            </Button>
            <Button variant="ghost" onClick={onProductClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </S.Header>
        </>
    )
}

export default Header;
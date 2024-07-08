'use client'
import * as S from "./header.styled"
import { FaCartShopping } from "react-icons/fa6";
import { BiArchiveIn } from "react-icons/bi";
import { PiBooksBold } from "react-icons/pi";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Cart from "../Cart";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";




const Header = () => {
    const { isLogged, user, logout } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isProductOpen, onOpen: onProductOpen, onClose: onProductClose  } = useDisclosure()
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
                <Link href="/cadastro">Cadastro</Link>
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
          <ModalHeader>Cadastrar Nova Loja</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input
                name="nome"
              
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Preço</FormLabel>
              <Input
                name="preco"
                type="number"
           
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Imagem</FormLabel>
              <Input
                name="image"
            
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Autor</FormLabel>
              <Input
                name="autor"
          
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Score</FormLabel>
              <Input
                name="Score"
            
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} >
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
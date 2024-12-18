"use client"
import * as S from "./header.styled";
import { FaCartShopping } from "react-icons/fa6";
import { BiArchiveIn } from "react-icons/bi";
import { PiBooksBold } from "react-icons/pi";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Cart from "../Cart";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { iProductResponseProps } from "@/types/cadastroproduct";
import { useQuery, useQueryClient } from "react-query";
import { getProducts } from "@/service/product.service";
import { createStore } from "@/service/cadastroloja.service";
import { useRouter } from "next/navigation";

const initialStoreItens: iProductResponseProps = { nome: "", img: "" , autor: "", preco: 0, score: 0 };

const Header = () => {
  const route = useRouter();
  const toast = useToast();
  const { isLogged, user, logout } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isProductOpen, onOpen: onProductOpen, onClose: onProductClose  } = useDisclosure();
  const { data: Product } = useQuery("Product", getProducts);
  const userQueryClient = useQueryClient()
  const [ newStore, setNewStore ] = useState<iProductResponseProps>(initialStoreItens);
  
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setNewStore ((prevState) => ({
      ...prevState, [name]: name === "preco" || name === "score" ? parseFloat(value) : name === "img" ? files?.[0] : value,
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      const createdStored = await createStore(newStore);
      userQueryClient.invalidateQueries("Product");
      onProductClose();
      setNewStore(initialStoreItens);
      toast({
        title: "Sucesso",
        description: "Novo Produto cadastrado com sucesso!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Erro ao Cadastrar o Produto", error);
      toast({
        title: "Erro",
        description: "Falha ao cadastrar o produto.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [newStore, onProductClose, userQueryClient, toast]);

  return (
    <>
      <Cart onClose={onClose} isOpen={isOpen} />
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
                <section>
                  <p>Olá, {user.name}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    bg="transparent"
                    onClick={logout}
                  >
                    <span>Sair</span>
                  </Button>
                </section>
              </>
            )}
          </div>
        </S.HeaderTop>
        <S.HeaderCenter>
          <Button
            bg="transparent"
            onClick={() => route.push("/")}
          >
            <span><PiBooksBold size={60} /> E-books</span>
          </Button>
          <S.Nav>
            <Button onClick={onOpen} bg="transparent" >
              <FaCartShopping /> Carrinho
            </Button>
            {/* Renderizar o botão de cadastro de produtos apenas em telas maiores */}
            <Button onClick={onProductOpen} bg="transparent" display={{ base: 'none', md: 'flex' }}>
              <BiArchiveIn /> Cadastro De Produtos
            </Button>
          </S.Nav>
        </S.HeaderCenter>
        <Modal isOpen={isProductOpen} onClose={onProductClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastrar Novo Produto</ModalHeader>
            <ModalBody>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  value={newStore.nome}
                  onChange={handleInputChange}
                  name="nome"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Preço</FormLabel>
                <Input
                  onChange={handleInputChange}
                  name="preco"
                  type="number"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Imagem</FormLabel>
                <Input
                  onChange={handleInputChange}
                  name="img"
                  type="file"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Autor</FormLabel>
                <Input
                  onChange={handleInputChange}
                  name="autor"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Score</FormLabel>
                <Input
                  value={newStore.score}
                  onChange={handleInputChange}
                  name="score"
                  type="number"
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
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
  );
};

export default Header;

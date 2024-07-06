'use client'
import * as S from "./header.styled"
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { PiBooksBold } from "react-icons/pi";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";



const Header = () => {
    const { isLogged, user, logout } = useAuth();
    return(
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
                    <div>   
                    <FaCartShopping />
                    Carrinho
                    </div>
                    <div>
                    <CgProfile />
                    Perfil
                    </div>
                    </S.Nav>


                </S.HeaderCenter>
        </S.Header>
    )
}

export default Header;
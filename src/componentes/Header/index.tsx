'use client'
import * as S from "./header.styled"
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { PiBooksBold } from "react-icons/pi";

const Header = () => {
    return(
        <S.Header>
            <S.HeaderTop>
                <p>Seja Bem Vindo a E-books</p>
                <div>
                <Link href={"/login"}> Login </Link>
                <Link href={"/register"}>Cadastro</Link>
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
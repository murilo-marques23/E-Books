"use client"
import * as S from "@/componentes/Footer/footer.style"
import { PiBooksBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FcCellPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Button, Link } from "@chakra-ui/react";

const Footer = () => {
    return(
    <S.Footer>
        <S.Logo>
        <PiBooksBold
        size={70}
        />
            <h1>E-Books</h1>
        </S.Logo>

        <S.footerCenter>
        <S.Redes>
            <span>Nossas Redes</span>

            <section>
            <div>
            <Button
            bg="transparent"
            >
            <FaInstagram
            size={30} />
            <ul>
                Instagram
            </ul>
            </Button>
            </div>

            <div>
            <Button
            bg="transparent">
            <FaTwitter
            size={30} />
            <ul>
                Twitter
            </ul>
            </Button>
            </div>
            </section>

        </S.Redes>

        <S.LinkUteis>
            <span>Link Uteis</span>

            <ul>
                <Link> Sobre Nos </Link>
                <Link> Nossa História </Link>
                <Link> Perguntas Frequentes </Link>
            </ul>

        </S.LinkUteis>

        <S.Contato>
            <span> Contate-nos </span>

            <div>
                <FcCellPhone />
                <ul>Telefone: (62) 99567-3020</ul>
            </div>
            
            <div>
                <MdEmail />
                <ul>Email: ebooks@hotmail.com</ul>
            </div>

        </S.Contato>
        </S.footerCenter>
        
        <S.footerButom>
            <p> Copyright©2024 - Desenvolvido Por Murilo Mendes</p>
        </S.footerButom>

    </S.Footer>

    )
}

export default Footer;
import styled from "styled-components";

export const Footer = styled.footer`
background-color: ${({ theme }) => theme.colors.brand.secondary};
width: 100%;


padding: 20px; /* Adicionando padding para espaçamento interno */
    @media (max-width: 768px) {

    height: 100%;   
    /* Ajuste para o componente Logo */
    Logo {
        h1 {
            font-size: 24px; /* Reduzindo ainda mais o tamanho da fonte */
        }
    }

    /* Ajuste para os componentes Redes, LinkUteis e Contato */
    Redes, LinkUteis, Contato {
        span {
            font-size: 16px; /* Reduzindo o tamanho da fonte */
        }
    }
}
`;

export const Logo = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 36px; /* Reduzindo o tamanho da fonte para telas menores */
        font-weight: 500;
    }
`;

export const FooterCenter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    

    @media(max-width: 545px){
        flex-direction: column;
    }
`;


export const Redes = styled.nav`
    display: flex;
    flex-direction: column;
    height: 100px;
    
    
    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }

    span {
        color: ${({ theme }) => theme.colors.white.white};
        font-size: 18px; /* Reduzindo o tamanho da fonte para telas menores */
        font-weight: 600;
        margin-left: 0; /* Redefinindo margem para telas menores */
        margin-bottom: 10px; /* Adicionando margem inferior para espaçamento */
    }

    Button {
        display: flex;
        gap: 5px;
        font-size: 16px; /* Reduzindo o tamanho da fonte para telas menores */
    }
`;

export const LinkUteis = styled.nav`
    display: flex;
    flex-direction: column;
    height: 100px;

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
    

    span {
        color: ${({ theme }) => theme.colors.white.white};
        font-size: 18px; /* Reduzindo o tamanho da fonte para telas menores */
        font-weight: 600;
    }

    ul {
        display: flex;
        flex-direction: column;
    }
`;

export const Contato = styled.nav`
    display: flex;
    flex-direction: column;
    height: 100px;

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
    

    span {
        color: ${({ theme }) => theme.colors.white.white};
        font-size: 18px; /* Reduzindo o tamanho da fonte para telas menores */
        font-weight: 600;
    }

    div {
        display: flex;
        gap: 5px;
    }
    

`;

export const FooterBottom = styled.section`
    background-color: ${({ theme }) => theme.colors.black.black};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px; /* Ajuste a altura conforme necessário */
    margin-top: 50px;

    p {
        color: ${({ theme }) => theme.colors.white.white};
        font-size: 14px; /* Reduzindo o tamanho da fonte para telas menores */
    }
    
    @media (max-width: 768px) {
    widht: 100%;
    height: 100%;
    }
`;


import styled from "styled-components"

export const Footer = styled.footer `
    background-color: ${({ theme }) => theme.colors.brand.secondary};
    whidth: auto;
    height: 300px;
    

`

export const footerCenter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
    margin-top: 25px;
    gap: 300px;  
`

export const Logo = styled.section `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h1{
    font-size: 50px;
    font-weight: 500;
    }
`

export const Redes = styled.nav `
    display: flex;
    flex-direction: column;
    
    height: 50px;

    span{
    color: ${({ theme }) => theme.colors.white.white};
    font-size: 20px;
    font-weight: 600;
    margin-left: 18px;
    }
    
    Button{
    display: flex;
    gap: 10px;
    }
`

export const LinkUteis = styled.nav`
    display: flex;
    flex-direction: column;
    height: 50px;

    span{
    color: ${({ theme }) => theme.colors.white.white};
    font-size: 20px;
    font-weight: 600;
    }

    ul{ 
    display: flex;
    flex-direction: column;
    }
`

export const Contato = styled.nav`
    display: flex;
    flex-direction: column;
    
    height: 50px;

    span{
    color: ${({ theme }) => theme.colors.white.white};
    font-size: 20px;
    font-weight: 600;
    }

    div{
    display: flex;
    gap: 10px;
    }
`

export const footerButom = styled.section`
    background-color: ${({ theme }) => theme.colors.black.black};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 150px;

    p{
        color: ${({ theme }) => theme.colors.white.white}
    }
    
`
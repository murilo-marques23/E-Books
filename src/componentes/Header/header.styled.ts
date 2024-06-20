import styled from "styled-components";


export const Header = styled.header `
    background-color: ${({ theme }) => theme.colors.brand.secondary};

`

export const HeaderTop = styled.section`
    background-color:${({ theme}) => theme.colors.brand.secondary};
    padding: .5rem 10%; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
        font-weight: 700;
    }

    div{ 
        display: flex;
        gap: 15px;
    }
`

export const HeaderCenter = styled.section`
    padding: 1rem 10%;
    background-color: ${({ theme }) => theme.colors.brand.primary};
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
    span{
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    
    `
    

    export const Nav = styled.nav`
    display: flex;
    gap: 10px;
    div{
    display: flex;
     justify-content: center;
     align-items: center;
    }
    
    `

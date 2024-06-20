'use client'

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;

    }
    
    body {
        font-family: 'Poppins', sans-serif;
        min-height: 100vh;
      
    }

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
`
export default GlobalStyles
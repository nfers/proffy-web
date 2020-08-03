import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  font-size: 60%;
  margin:0;
  box-sizing: border-box;
  padding: 0;
  font-family: 'Archivo', serif;
  
  color: #FFF;

  h1 {
    color: var(--color-primary)
  }

  html, body{
    height: 100vh;
  }
  
  body{
    background: var(--color-background);
  }

  #root{ 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    
    font: 500 1.6rem Poppins;
  }
`;

export default GlobalStyle;

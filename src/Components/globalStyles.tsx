import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.body};
        transition: all 0.50s linear;
    }
    p {
    color: ${({ theme }) => theme.paragraph};
  }

  
  h2 {
    color: ${({ theme }) => theme.heading};
  }
  h3{
    color: ${({ theme }) => theme.headerheading};

  }
  input, input::placeholder{
    color:${({ theme }) => theme.paragraph}
    
  }

`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        
        --background-color: #f8fdff;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;

        body {
            background-color: var(--background-color);
        }


        html, body #root {
            height: 100%;
        }
        
        button {
            background-color: none;
            border: none;
            outline: none;
        }

        a {
            text-decoration: none;
            outline: none;
        }
    }

`;

export default GlobalStyle;
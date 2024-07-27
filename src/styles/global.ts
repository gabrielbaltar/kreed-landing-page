import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        
        --background-color: #f8fdff;
        --primary-color: #1E255E;
        --border-color: #17A4D0;
        --support-text: rgba(30, 37, 94, 0.7);
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        text-rendering:optimizeLegibility;
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Poppins', sans-serif;

        body {
            background-color: var(--background-color);
            font-family: "Poppins", sans-serif;
            font-size: 1rem;
        }


        html, body #root {
            height: 100%;
        }
        
        button {
            background-color: var(--background-color);
            border: none;
            outline: none;
            font-family: 'Poppins', sans-serif;
        }

        a {
            text-decoration: none;
            outline: none;
        }
    }

`;

export default GlobalStyle;
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    p {
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }
    
    h1 {
        font-family: 'Fjalla One', sans-serif;
    }
    
    a, p, button, h2 {
        font-family: 'Nunito Sans', sans-serif;
    }

    a, button {
        cursor: pointer;
    }
`;
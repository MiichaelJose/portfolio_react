import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }
    
    h1 {
        font-family: 'Fjalla One', sans-serif;
    }

    a, p, button {
        font-family: 'Nunito Sans', sans-serif;
    }

    a, button {
        cursor: pointer;
    }
`;
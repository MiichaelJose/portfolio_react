import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #070A0F;
        //background: linear-gradient(44.68deg, #252525 24.86%, rgba(37, 37, 37, 0.9) 73.39%, rgba(37, 37, 37, 0.85) 87.09%, rgba(37, 37, 37, 0.75) 100%);
    }

    p {
        font-size: 16px;
        color: white;
    }

    a {
        all: unset;
    }
    
    h1, h3 {
        font-family: 'Fjalla One', sans-serif;
    }

    h2 {
        font-size: 25px;
    }

    h3 {
        font-size: 20px;
    }

    a, p, button, h2 {
        font-family: 'Nunito Sans', sans-serif;
    }

    a, button {
        cursor: pointer;
    }
`;
import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.a`
    width: 80px;
    height: 35px;

    margin-top: 5px;
    border-radius: 25px;

    background-color: white;
    
    justify-content: center;
    align-items: center;
    display: flex;

    border: 1px solid #808080;

    > p {
        color: black;
    }
`;
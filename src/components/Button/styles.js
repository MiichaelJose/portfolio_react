import styled from "styled-components";

export const Container = styled.a`
    width: fit-content;
    max-width: 150px;
    height: 35px;    

    border-radius: 15px;
    padding-inline: 15px;
    
    background-color: white;
    
    justify-content: center;
    align-items: center;
    display: flex;

    border: 1px solid #808080;

    > p {
        color: black;
    }

    > img {
        width: 40px;
        height: 40px;
        margin-left: 5px;
    }
`;
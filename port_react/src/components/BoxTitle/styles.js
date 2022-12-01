import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 533px;
    height: fit-content;
    margin: 50px 0;

    > div {
        position: relative;
    }
`;

export const Header = styled.div`
    padding-left: 25px;
    margin-bottom: 10px;

    background-color: ${(props) => `${props.backgroundcolor}`};

    > h2 {
        color: white;
        font-size: 30px;
    }
`;
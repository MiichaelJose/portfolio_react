import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 600px;
    height: fit-content;
    margin: 25px 0;

    > div {
        position: relative;
        padding: 15px;
    }

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
`;

export const Header = styled.div`
    //padding-left: 25px;
    margin-bottom: 10px;

    background-color: ${(props) => `${props.backgroundcolor}`};

    > h2 {
        color: white;
        font-size: 30px;
    }
`;
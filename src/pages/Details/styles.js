// css-in-js CSS no JS
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
`;

export const Content = styled.div`
    width: 50%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: scroll;
`;

export const BoxFlex = styled.div`
    display: flex;
    align-items: center;

    text-align: ${(props) => props.aligntext !== "right" ? "left" : props.aligntext };

    > img {
        width: 80px;
        height: 80px;
    }

    > div > p {
        margin-left: ${(props) => props.margintext != "" ? props.margintext : "0px"};
    }
`;

export const BoxColumnText = styled.div`
    width: 100%;
    height: 35px;

    border-bottom: 1px solid black;
    padding-inline: 15px;

    > p {
        line-height: 2rem;
    }
`;

export const BoxSkills = styled.div`
    width: 100%;
    height: fit-content;
    padding: 15px;
    flex-wrap: wrap;

    display: flex;
    justify-content: space-around;
    background-color: white;
    > img {
        width: 45px;
        height: 45px;
    }
`;
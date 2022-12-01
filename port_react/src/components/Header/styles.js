import styled from "styled-components";

export const Container = styled.header`
    width: 50%;
    height: 100%;

    background-image: url("../../../images/main-img.jpg");
    background-position: center;
    background-size: cover;
    background-color: red;

    > div {
        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.52);

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Content = styled.div`
    width: 450px;
    height: 350px;

    color: white;

    text-align: center;
    line-height: 5rem;

    > h1 {
        font-size: 48px;
    }

    > div {
        width: 100%;

        display: flex;
        justify-content: space-evenly;

        a {
            display: flex;
            align-items: center;
        }

        img {
            width: 32px;
            height: 32px;
            margin-left: 1rem;
        }
    }
`;

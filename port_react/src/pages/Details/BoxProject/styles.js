import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 350px;   
    height: 450px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;

    border: 3px solid lightgrey;
    padding-top: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
`;

export const SpaceImg = styled.div`
    width: 100%;
    height: 80%;

    display: flex;
    justify-content: center;

    > img {
        width: 100%;
        max-width: 400px;
        height: 100%;
        max-height: 400px;

        border-radius: 20px;
    }
`;

export const Button = styled(Link)`
    width: 50%;
    height: 50px;

    text-align: center;
    line-height: 50px;
    font-weight: bold;

    border-radius: 20px;
    margin: 15px 0;
    border: 3px solid lightgray;
`;
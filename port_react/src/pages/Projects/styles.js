import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
`;

export const Content = styled.div`
    padding: 2%;
    width: 50%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${(props) => `${props.backgroundcolor}`};
    overflow-y: scroll;
`;
import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    h1, h3 {
        color: white;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 100px;
    margin-bottom: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const LinksTopHeader = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LinksBottomHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
`;

export const ImgContent = styled.img`
    width: 400px;
    height: 400px;
    margin-bottom: 55px;
    margin-inline: auto;
    filter: drop-shadow(4px 10px 10px rgba(255, 255, 255, 0.35));

    :hover {
        width: 405px;
        height: 405px;
        transition: 0.3s;
        filter: saturate(1.5);
    }
`;

export const SectionSobre = styled.div`
    margin-bottom: 60px;

    > h1 {
        margin-bottom: 25px;
    }
`;

export const SectionEstruturaBackEnd = styled.div`
    width: 100%;
    height: 400px;
    margin-bottom: 65px;

    > h1 {
        margin-bottom: 25px;
    }

    > div {
        display: flex;
    
        > img {
            width: 150px;
            height: 250px;
        
            :hover {
                width: 157px;
                height: 257px;
                transition: 0.3s;
                filter: saturate(1.5);
            }
        }
        
        > div {
            margin-left: 10px;
            
            > h3 {
                margin-bottom: 25px;
            }
            
            > p {
                margin-bottom: 25px;
            }
        }
    }
`;

export const SectionEstruturaFrontEnd = styled.div`
    margin-bottom: 65px;

    > h3 {
        margin-bottom: 25px;
    }

    > div {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;

        > img {
            width: 200px;
        
            :hover {
                width: 207px;
                transition: 0.3s;
                filter: saturate(1.5);
            }
        }
    }

    > p {
        margin-bottom: 25px;
    }
`;

export const SectionEstruturaMobile = styled.div`
    > h3 {
        margin-bottom: 25px;
    }

    > p {
        margin-bottom: 25px;
    }

    > div {
        margin-bottom: 25px;

        > img {
            width: 200px;

            :hover {
                width: 207px;
                transition: 0.3s;
                filter: saturate(1.5);
            }
        }
    }
`;


export const BoxEstruturaLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
        width: 50%;
        display: flex;
        justify-content: space-around;
    }
`;
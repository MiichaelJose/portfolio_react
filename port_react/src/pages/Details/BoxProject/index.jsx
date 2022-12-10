import { Container, SpaceImg, Button }  from './styles';

export function BoxProject({ srcimg, id }) {
    return(
        <Container>
            <SpaceImg>
                <img src={srcimg} alt="" />
            </SpaceImg>
            <Button to={`/projects/${id}`}>
                <p>visualizar projeto</p>
            </Button>
        </Container>
    );    
}
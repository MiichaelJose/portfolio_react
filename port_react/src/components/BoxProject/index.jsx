import { Container, SpaceImg, Button }  from './styles';

import { Link } from 'react-router-dom';

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
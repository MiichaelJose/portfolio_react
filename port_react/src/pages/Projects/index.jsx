import { Container } from './styles';

import { Header } from '../../components/Header';

import { useParams } from 'react-router-dom';

export function Projects() {
    const paramentros = useParams();

    console.log(paramentros.id);

    return(
        <Container>
            <Header />
        </Container>
    );
}
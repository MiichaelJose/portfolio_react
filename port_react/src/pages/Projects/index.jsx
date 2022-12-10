import { Container, Content } from './styles';

import { Header } from '../../components/Header';

import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { Chamado } from './Chamado';

export function Projects() {
    const theme = useTheme();
    const { id } = useParams();

    function controller() {
        switch (id) {
            case 'chamado':
                    return chamado();
                break;
            default:
                break;
        }
    }

    function color() {
        switch (id) {
            case 'chamado':
                    return theme.COLORS.PURPLE_BOLD;
                break;
            default:
                break;
        }
    }

    function chamado() {
        return(
            <Chamado />
        );
    }

    return (
      <Container>
        <Header />
        <Content backgroundcolor={color()}>{controller()}</Content>
      </Container>
    );
}
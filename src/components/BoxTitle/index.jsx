import { Container, Header } from './styles';

export function BoxTitle({ title, backcolor, children }) {
    return (
        <Container>
            <Header backgroundcolor={ backcolor }>
                <h2>{ title }</h2>
            </Header>
            <div>
                { children }
            </div>
        </Container>
    )
}
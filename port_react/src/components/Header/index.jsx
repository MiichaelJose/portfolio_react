import { Container, Content } from './styles';

export function Header() {
    return(
        <Container>
            <div>
                <Content>
                    <h1>Michael José</h1>
                    <h1>Desenvolvedor Júnior</h1>

                    <div>
                        <a>
                            <p>e-mail</p>
                            <img src="../../../images/email-white-icon.png" alt="icon email" />
                        </a>
                        <a>
                            <p>linkedin</p>
                            <img src="../../../images/linkedin-white-icon.png" alt="icon linkedin" />
                        </a>
                    </div>
                </Content>
            </div>
        </Container>
    )
}
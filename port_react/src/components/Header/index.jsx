import { Container, Content } from "./styles";

import images from "../../images/images";

export function Header() {
  return (
    <Container>
      <div>
        <Content>
          <h1>Michael José</h1>
          <h1>Desenvolvedor Júnior</h1>
          <div>
            <a href="mailto:michaeljosedasilva2002@gmail.com">
              <p>e-mail</p>
              <img src={images.imgEmail} alt="icon email" />
            </a>
            <a href="https://www.linkedin.com/in/michaeljos%C3%A9/">
              <p>linkedin</p>
              <img src={images.imgLinkedin} alt="icon linkedin" />
            </a>
          </div>
        </Content>
      </div>
    </Container>
  );
}

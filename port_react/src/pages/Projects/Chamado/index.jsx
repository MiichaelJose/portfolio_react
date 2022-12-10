import { Button } from "../../../components/Button";
import {
  Container,
  Header,
  LinksTopHeader,
  LinksBottomHeader,
  ImgContent,
  SectionSobre,
  SectionEstruturaBackEnd,
  SectionEstruturaFrontEnd,
  SectionEstruturaMobile,
  BoxEstruturaLinks
} from "./styles";

import images from "../../../assets/images.js";

export function Chamado() {
  return (
    <Container>
      <Header>
        <LinksTopHeader>
          <h1>CHAMADO</h1>

          <Button href={"/"}>voltar</Button>
        </LinksTopHeader>
        <LinksBottomHeader>
          <Button href={"#backend"}>backend</Button>
          <Button href={"#frontend"}>frontend</Button>
        </LinksBottomHeader>
      </Header>

      <ImgContent src={images.mainChamado} />

      <SectionSobre id="backend">
        <h1>SOBRE</h1>
        <p>
          O projeto chamado tem como o objetivo de facilitar o gerenciamento dos
          pedidos, sendo eles problemas técnicos, onde o cliente irá no
          estabelecimento solicitar uma vistoria no seu equipamento, assim, o
          pedido análisado e aceito, criasse um chamado.
        </p>
      </SectionSobre>

      <SectionEstruturaBackEnd id="frontend">
        <h1>ESTRUTURA</h1>
        <div>
          <img src={images.estruturaChamado} alt="estrutura projeto" />
          <div>
            <h3>BACKEND</h3>
            <p>
              Desenvolvido utilizando a linguagem java com o framework spring
              boot e integração a um banco de dados mysql. O principal motivo de
              eu ter escolhido o spring boot para esse sistema, é por conta das
              funcionalidades que ele oferece para o desenvolvimento, sendo
              eles, velocidade de atualização do servidor, fácil utilizando por
              conta da sua estrutura mvc e recursos que agiliza o
              desenvolvimento, como por exemplo o spring data jpa.
            </p>
            <Button>link github</Button>
          </div>
        </div>
      </SectionEstruturaBackEnd>

      <SectionEstruturaFrontEnd>
        <h3>FRONTEND</h3>
        <div>
          <img src={images.loginChamado} alt="" />
          <img src={images.menuChamado} alt="" />
          <img src={images.cadastrarChamado} alt="" />
          <img src={images.listarChamado} alt="" />
          <img src={images.cadastroUsuarioChamado} alt="" />
        </div>
        <p>
          Desenvolvido utilizando html, css e javascript. Interface para o
          usuário bonita e de fácil usabilidade, com menu de opções que
          redireciona para páginas importantes do sistema. podendo acessar o
          cadastro, listagem, edição de usuário e acesso a informações completa
          de um serviço especifico. para esse acesso temos a opção de utilizar o
          qr code assim visualizar no dispositivo móvel.
        </p>
        <Button>link front</Button>
      </SectionEstruturaFrontEnd>

      <SectionEstruturaMobile>
        <h3>MOBILE</h3>
        <div>
          <img src={images.loginChamadoMobile} alt="" />
          <img src={images.listarChamadoMobile} alt="" />
          <img src={images.qrcodeChamadoMobile} alt="" />
          <img src={images.chamadoMobile} alt="" />
        </div>
        <p>
          Desenvolvido utilizando html, css e javascript. Interface para o
          usuário bonita e de fácil usabilidade, com menu de opções que
          redireciona para páginas importantes do sistema. podendo acessar o
          cadastro, listagem, edição de usuário e acesso a informações completa
          de um serviço especifico. para esse acesso temos a opção de utilizar o
          qr code assim visualizar no dispositivo móvel.
        </p>
        <BoxEstruturaLinks>
            <Button>link mobile</Button>

            <div>
                <Button href={'#backend'}>backend</Button>
                <Button href={'#frontend'}>frontend</Button>
                <Button href={'/'}>voltar</Button>
            </div>
        </BoxEstruturaLinks>
        
      </SectionEstruturaMobile>
    </Container>
  );
}

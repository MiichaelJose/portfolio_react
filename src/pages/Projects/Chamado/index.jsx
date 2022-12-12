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
  BoxEstruturaLinks,
} from "./styles";

import images from "../../../assets/images.js";

export function Chamado() {
  const github = 'https://github.com/MiichaelJose/_front_back_java_react-native_/tree/main/';

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
          <Button href={"#mobile"}>mobile</Button>
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
            <Button href={github+'backend_chamado'} target={"_blank"}>
              <p>link back</p> <img src={images.imgGithub} alt="img github" />
            </Button>
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
        <Button href={github+'frontend_chamado'} target={"_blank"}>
          <p>link front</p> <img src={images.imgGithub} alt="img github" />
        </Button>
      </SectionEstruturaFrontEnd>
      <SectionEstruturaMobile id="mobile">
        <h3>MOBILE</h3>
        <div>
          <img src={images.loginChamadoMobile} alt="img login mobile" />
          <img
            src={images.listarChamadoMobile}
            alt="img listar chamado mobile"
          />
          <img
            src={images.qrcodeChamadoMobile}
            alt="img qrcode chamado mobile"
          />
          <img src={images.chamadoMobile} alt="img chamado mobile" />
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
          <Button href={github+'mobile_chamado'} target={"_blank"}>
            <p>link mobile</p> <img src={images.imgGithub} alt="img github" />
          </Button>

          <div>
            <Button href={"#backend"}>backend </Button>
            <Button href={"#frontend"}>frontend</Button>
            <Button href={"/"}>voltar</Button>
          </div>
        </BoxEstruturaLinks>
      </SectionEstruturaMobile>
    </Container>
  );
}

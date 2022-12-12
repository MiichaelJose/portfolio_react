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

export function HelpDesk() {
  const github = 'https://github.com/MiichaelJose/projeto-helpdesk_java-springboot-springsecurity_JWT/tree/main/'

  return (
    <Container>
      <Header>
        <LinksTopHeader>
          <h1>HELPDESK</h1>
          
          <Button href={"/"}>voltar</Button>
        </LinksTopHeader>
        <LinksBottomHeader>
          <Button href={"#backend"}>backend</Button>
          <Button href={"#frontend"}>frontend</Button>
        </LinksBottomHeader>
      </Header>
      <ImgContent src={images.mainHelpdesk} />
      <SectionSobre id="backend">
        <h1>SOBRE</h1>
        <p>
          O projeto helpdesk tem como o objetivo de facilitar o gerenciamento
          dos pedidos em uma empresa grande com vários departamentos, os
          problemas técnicos, onde um funcionário ira criar um pedido o admin
          vai análisar e encaminhar para um técnico responsável.
        </p>
      </SectionSobre>
      <SectionEstruturaBackEnd id="frontend">
        <h1>ESTRUTURA</h1>
        <div>
          <img src={images.estruturaHelpdesk} alt="estrutura projeto" />
          <div>
            <h3>BACKEND</h3>
            <p>
              Desenvolvido utilizando a linguagem java com o framework spring
              boot, com segurança no sistema utilizando spring security e jwt,
              integração a um banco de dados mysql e manipulando os dados com o
              spring data jpa. O principal motivo de eu ter escolhido o spring
              boot para esse sistema, é por conta das funcionalidades que ele
              oferece para o desenvolvimento, sendo eles, velocidade, fácil
              manutenção por causa da sua estrutura mvc e recursos que agiliza o
              desenvolvimento.
            </p>
            <Button href={github+'backend'} target={'_blank'}>
              <p>link back</p> <img src={images.imgGithub} alt="img github" />
            </Button>
          </div>
        </div>
      </SectionEstruturaBackEnd>
      <SectionEstruturaFrontEnd>
        <h3>FRONTEND (EM DESENVOLVIMENTO)</h3>
        <div>
          <img src={images.mainHelpdesk} alt="" />
        </div>
        <p>
          Desenvolvido utilizando html, css e javascript. Interface para o admin
          bonita e de fácil usuabilidade, uma unica página onde cada opção
          modifica a página de maneira dinânima. cadastro de um pedido é feito
          através de um chatbot com mensagens armazenadas. area das solicitações
          de acesso, onde o admin podera visualizar quem esta querendo ter
          acesso ao sistema, podendo aceitar ou recusar.
        </p>
        <BoxEstruturaLinks>
          <Button href={github+'frontend'} target={'_blank'}>
            <p>link front</p> <img src={images.imgGithub} alt="img github" />
          </Button>

          <div>
            <Button href={"#backend"}>backend </Button>
            <Button href={"#frontend"}>frontend</Button>
            <Button href={"/"}>voltar</Button>
          </div>
        </BoxEstruturaLinks>
      </SectionEstruturaFrontEnd>
    </Container>
  );
}

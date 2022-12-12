import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import {
  Container,
  Content,
  BoxFlex,
  BoxColumnText,
  BoxSkills,
} from "./styles";

import { Header } from "../../components/Header";
import { BoxTitle } from "../../components/BoxTitle";
import { BoxProject } from "./BoxProject";

// pegar o theme e utilizar fora de componentes estilizados
import { useTheme } from "styled-components";

// SWIPER
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";

import images from "../../assets/images";

// Componente
export function Details() {
  const theme = useTheme();

  // 1 componente pode retornar 1 elemento
  return (
    <Container>
      <Header />
      <Content>
        <BoxTitle title={"Sobre"} backcolor={theme.COLORS.ORANGE}>
          <p>
            Olá, meu nome é Michael. Sou estudante na programação formado em
            desenvolvimento de sístemas, em busca de uma oportunidade para
            agregar e evoluir de maneira linear com a empresa. Gosto de
            trabalhar com back-end integrando a um banco manipulando os dados da
            melhor maneira, assim, utilizando boas práticas. Para melhor
            interagir com esses sistemas, o front-end desenvolvo de maneira
            agradável com a experiência fácil ao usuário.
          </p>
          <BoxFlex>
            <img src={images.imgCoin} alt="img coin" />
            <p>
              Durante a minha formação como desenvolver, fui homenageado com uma
              certificação de aluno ouro por ter a nota média acima de 95%
            </p>
          </BoxFlex>
        </BoxTitle>

        <BoxTitle title={"O que faço"} backcolor={theme.COLORS.BLUE}>
          <BoxFlex margintext={"10px"}>
            <img src={images.imgWeb} alt="img web" />
            <div>
              <p>Sistemas para web</p>
              <p>
                softwares com acesso aos dados assim tratando e armazenando,
                páginas resposivas e bonitas
              </p>
            </div>
          </BoxFlex>
          <BoxFlex aligntext={"right"}>
            <div>
              <p>App mobile</p>
              <p>
                aplicativos com acesso a apis, consumindo os dados e manipulando
                design de fácil conhecimento e utilização por parte dos
                clientes.
              </p>
            </div>
            <img src={images.imgMobile} alt="img mobile" />
          </BoxFlex>
        </BoxTitle>
        <BoxTitle title={"Projetos"} backcolor={theme.COLORS.ORANGE_BOLD}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <BoxProject srcimg={images.mainChamado} id={'chamado'}></BoxProject>
            </SwiperSlide>
            <SwiperSlide>
              <BoxProject srcimg={images.imgHelpDesk} id={'helpdesk'}></BoxProject>
            </SwiperSlide>
          </Swiper>
        </BoxTitle>
        <BoxTitle title={"Competências"} backcolor={theme.COLORS.PURPLE}>
          <BoxColumnText>
            <p>Tecnologias back-end</p>
          </BoxColumnText>
          <BoxSkills>
            <img src={images.imgJava} alt="" />
            <img src={images.imgSpring} alt="" />
            <img src={images.imgPhp} alt="" />
            <img src={images.imgMaven} alt="" />
            <img src={images.imgJwt} alt="" />
          </BoxSkills>
          <BoxColumnText>
            <p>Tecnologias front-end e mobile</p>
          </BoxColumnText>
          <BoxSkills>
            <img src={images.imgReact} alt="" />
            <img src={images.imgHtml} alt="" />
            <img src={images.imgCss} alt="" />
            <img src={images.imgJs} alt="" />
          </BoxSkills>
          <BoxColumnText>
            <p>Tecnologias banco de dados</p>
          </BoxColumnText>
          <BoxSkills>
            <img src={images.imgMysql} alt="" />
            <img src={images.imgMongo} alt="" />
            <img src={images.imgSql} alt="" />
          </BoxSkills>
          <BoxColumnText>
            <p>Ferramentas para desenvolvimento IDEs</p>
          </BoxColumnText>
          <BoxSkills>
            <img src={images.imgVisualStudioCode} alt="" />
            <img src={images.imgEclipse} alt="" />
            <img src={images.imgAndroidStudio} alt="" />
          </BoxSkills>
        </BoxTitle>
      </Content>
    </Container>
  );
}

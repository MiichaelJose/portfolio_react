import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import { Container, Content, BoxFlex } from './styles';

import { Header } from '../../components/Header';
import { BoxTitle } from '../../components/BoxTitle';

// pegar o theme e utilizar fora de componentes estilizados
import { useTheme } from 'styled-components';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

// Componente
export function Details(){
  const theme = useTheme()

  

  // 1 componente pode retornar 1 elemento
  return(
    <Container>
      <Header />
      <Content>
          <BoxTitle 
            title={"Sobre"} 
            backcolor={theme.COLORS.ORANGE}
          >
            <p>Olá, meu nome é Michael. Sou estudante na programação formado em desenvolvimento de sístemas, 
              em busca de uma oportunidade para agregar e evoluir de maneira linear com a empresa. Gosto de 
              trabalhar com back-end integrando a um banco manipulando os dados da melhor maneira, assim, 
              utilizando boas práticas. Para melhor interagir com esses sistemas, o front-end desenvolvo de 
              maneira agradável com a experiência fácil ao usuário.</p>
            <BoxFlex>
              <img src="../../../images/coin-icon.png" alt="" />
              <p>Durante a minha formação como desenvolver, fui homenageado com uma certificação de aluno ouro
                 por ter a nota média acima de 95%</p>
            </BoxFlex>
          </BoxTitle>
          
          <BoxTitle 
            title={"O que faço"} 
            backcolor={theme.COLORS.BLUE}
          >
            <BoxFlex margintext={"10px"}>
              <img src="../../../images/web-icon.png" alt="" />
              <div>
                <p>Sistemas para web</p>
                <p>softwares com acesso aos dados assim tratando e armazenando, páginas resposivas e bonitas</p>
              </div>
            </BoxFlex>
            <BoxFlex aligntext={"right"} >
              <div>
                <p>App mobile</p>
                <p>aplicativos com acesso a apis, consumindo os dados e manipulando design de fácil conhecimento e 
                  utilização por parte dos clientes.</p>
              </div>
              <img src="../../../images/mobile-icon.png" alt="" />
            </BoxFlex>
          </BoxTitle>
          
          <BoxTitle 
            title={"Projetos"} 
            backcolor={theme.COLORS.GREEN}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              loop={5}
              pagination={
                {clickable:true}
              }
              modules={[Navigation, Pagination]}
            >
                <SwiperSlide>
                  <p>title 1</p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>title 2</p>
                  </SwiperSlide>
                <SwiperSlide>
                  <p>title 3</p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>title 4</p>
                  </SwiperSlide>
                <SwiperSlide>
                  <p>title 5</p>
                </SwiperSlide>
            </Swiper>
           </BoxTitle>
          <BoxTitle 
            title={"Competências"} 
            backcolor={theme.COLORS.PURPLE}
          >
          </BoxTitle>
         
      </Content>
    </Container>
  )
}
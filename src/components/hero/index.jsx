import {
  HeroContainer,
  HeroMainButtons,
  HeroSocial,
  HeroSocialButton,
  HeroTitle,
  HeroTitleAnimation,
  HeroWrapper,
  MainButton,
  Titles,
} from "./hero.js";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroTitle>Sou Vinicius Pereira</HeroTitle>
        <HeroTitle>Desenvolvedor Web</HeroTitle>
        <Titles>
          <HeroTitle>Front-End</HeroTitle>
          {/* Aqui deve ter uma animação */}
          <HeroTitleAnimation>React</HeroTitleAnimation>
          {/* Aqui deve ter uma animação, Trocando a palavra React por (javascript) */}
        </Titles>
        <HeroSocial>
          <HeroSocialButton>
            <FaGithub />
          </HeroSocialButton>
          <HeroSocialButton>
            <FaLinkedin />
          </HeroSocialButton>
        </HeroSocial>
        <HeroMainButtons>
          <MainButton>Projetos</MainButton>
          <MainButton>Tecnologias</MainButton>
        </HeroMainButtons>
      </HeroContainer>
      <HeroContainer>
        <img src="#" alt="" />
      </HeroContainer>
    </HeroWrapper>
  );
}

export default Hero;

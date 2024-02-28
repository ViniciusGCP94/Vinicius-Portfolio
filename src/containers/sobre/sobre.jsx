import {
  Bio,
  BioPhrase,
  Emoji,
  SobreContainer,
  SobreWrapper,
  Technologies,
  Technology,
  EmojiTech,
  Title,
} from "./sobreStyles";

import Analise from "../../assets/Favicon/programming.svg";
import Frontend from "../../assets/Favicon/browser.svg";
import Web from "../../assets/Favicon/web-ui.svg";
import jsreact from "../../assets/Favicon/react.svg";
import Js from "../../assets/Favicon/javascript.svg";
import Git from "../../assets/Favicon/git.svg";
import Html5 from "../../assets/Favicon/html.svg";
import Css3 from "../../assets/Favicon/css.svg";
import Nodejs from "../../assets/Favicon/node.svg";

function Sobre() {
  return (
    <SobreWrapper>
      <SobreContainer>
        <Title>Sou Vinícius Pereira</Title>
        <Bio>
          {/*Colocar emoji no início de cada frase */}
          <BioPhrase>
            <Emoji src={Analise} alt="" />
            Estudante de Análise e Desenvolvimento de Sistemas
          </BioPhrase>
          <BioPhrase>
            {" "}
            <Emoji src={Frontend} alt="" />
            Front-End React
          </BioPhrase>
          <BioPhrase>
            {" "}
            <Emoji src={Web} alt="" />
            Escrever algo interessante aqui
          </BioPhrase>
        </Bio>
        <Technologies>
          {/*Colocar svg de cada tecnologia */}
          <Technology>
            <EmojiTech src={jsreact} alt="" />
            React
          </Technology>
          <Technology>
            {" "}
            <EmojiTech src={Js} alt="" />
            Javascript
          </Technology>
          <Technology>
            {" "}
            <EmojiTech src={Git} alt="" />
            Gitflow
          </Technology>
          <Technology>
            {" "}
            <EmojiTech src={Html5} alt="" />
            Html
          </Technology>
          <Technology>
            {" "}
            <EmojiTech src={Css3} alt="" />
            Css
          </Technology>
          <Technology>
            {" "}
            <EmojiTech src={Nodejs} alt="" />
            Node
          </Technology>
        </Technologies>
      </SobreContainer>
      <SobreContainer></SobreContainer>
    </SobreWrapper>
  );
}

export default Sobre;

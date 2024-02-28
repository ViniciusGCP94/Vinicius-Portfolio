import {
  ButtonLinks,
  CardImage,
  CardInfo,
  CardTech,
  CardText,
  CardTitle,
  CardWrapper,
  Tech,
  WebButton,
} from "./cardStyle";

import LOL from "../../assets/images/login-lol.jpg";
import { FaGithub } from "react-icons/fa";

function Card() {
  return (
    <CardWrapper>
      <CardImage src={LOL} alt="" />
      <CardInfo>
        <CardTitle>titulo</CardTitle>
        <CardText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          delectus! Eveniet recusandae delectus ea unde ex sapiente tenetur
          dolorem obcaecati totam, molestias quae necessitatibus quibusdam
          tempora, inventore est sed qui?
        </CardText>
        <CardTech>
          <Tech>JS</Tech>
          <Tech>CSS</Tech>
          <Tech>Html</Tech>
        </CardTech>
        <ButtonLinks>
          <WebButton href="https://github.com/ViniciusGCP94">
            <FaGithub />
            Github
          </WebButton>
          <WebButton>Web</WebButton>
        </ButtonLinks>
      </CardInfo>
    </CardWrapper>
  );
}
export default Card;

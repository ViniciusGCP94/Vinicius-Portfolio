import { SobreContainer, SobreWrapper, Technologies } from "./sobreStyles";

function Sobre() {
  return (
    <SobreWrapper>
      <SobreContainer>
        <h2>Sou Vinícius Pereira</h2>
        <ul>
          {/*Colocar emoji no início de cada frase */}
          <li>Estudante de Análise e Desenvolvimento de Sistemas</li>
          <li>Front-End React</li>
          <li>Escrever algo interessante aqui</li>
        </ul>
        <Technologies>
          {/*Colocar svg de cada tecnologia */}
          <li>React</li>
          <li>Javascript</li>
          <li>Gitflow</li>
          <li>Html</li>
          <li>Css</li>
          <li>Node</li>
        </Technologies>
      </SobreContainer>
      <SobreContainer></SobreContainer>
    </SobreWrapper>
  );
}

export default Sobre;

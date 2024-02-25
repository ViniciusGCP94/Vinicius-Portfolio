import styled from "styled-components";

export const SobreWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border: 1px solid blue;
`;

export const SobreContainer = styled.div`
  width: 47%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: yellow;
  border: 1px solid red;
`;

export const Technologies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid red;
`;

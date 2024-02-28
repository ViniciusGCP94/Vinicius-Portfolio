import styled from "styled-components";

export const SobreWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #030303;
`;

export const SobreContainer = styled.div`
  width: 47%;
  height: 90%;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #d9d9d9;
`;

export const Bio = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  padding: 10px;
`;

export const BioPhrase = styled.p`
  font: medium 20px "JetBrains Mono", monospace;
  color: #d9d9d9;
  display: flex;
  align-items: end;
`;

export const Emoji = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const Technologies = styled.div`
  display: grid;
  padding: 20px 0px;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid green;
`;

export const Technology = styled.li`
  font: 600 20px "JetBrains Mono", monospace;
  color: #d9d9d9;
  list-style: none;
  padding: 10px;
`;

export const EmojiTech = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

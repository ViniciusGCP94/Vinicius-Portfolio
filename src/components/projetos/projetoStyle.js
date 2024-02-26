import styled from "styled-components";

export const ProjectWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ProjectContent = styled.div`
  width: 90%;
  height: 80%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 30px;
`;

export const Project = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  border: 1px solid blue;
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TripleCircle = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: blueviolet;
  border: 1px solid white;
  border-radius: 20px;
`;

export const ProjectTitle = styled.h1`
  font: 600 22px "JetBrains Mono", monospace;
`;

export const ProjectText = styled.p`
  font: 400 14px "JetBrains Mono", monospace;
`;

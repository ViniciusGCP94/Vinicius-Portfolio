import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  padding: 0px 70px 70px 70px;
`;

export const HeroContainer = styled.div`
  width: 50%;
`;

export const Titles = styled.div`
  display: flex;
`;

export const HeroTitle = styled.h1`
  font: medium 50px "JetBrains Mono", monospace;
`;

export const HeroTitleAnimation = styled.span`
  font: bold 50px "JetBrains Mono", monospace;
  margin-left: 20px;
  border: 1px solid Blue;
`;

export const HeroSocial = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
`;

export const HeroSocialButton = styled.div`
  width: 40%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 400 40px "JetBrains Mono", monospace;
  border: 2px solid #030303;
  border-radius: 10px;
`;

export const HeroMainButtons = styled.div`
  width: 70%;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainButton = styled.button`
  font: 400 25px "JetBrains Mono", monospace;
  padding: 5px 20px;
  border-radius: 30px;
  border: 2px solid #030303;
`;

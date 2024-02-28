import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 350px;
  height: 500px;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: grey;
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export const CardInfo = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const CardTitle = styled.h1`
  font-size: 25px;
`;

export const CardText = styled.p`
  font-size: 14px;
`;

export const CardTech = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const Tech = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: blueviolet;
`;

export const ButtonLinks = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
`;

export const WebButton = styled.button`
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  border-radius: 15px;
`;

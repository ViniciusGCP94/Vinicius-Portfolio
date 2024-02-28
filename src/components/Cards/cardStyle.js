import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 400px;
  height: 500px;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #030303;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 45%;
  border: 3px solid #a7a7a7;
  border-radius: 15px;
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 50%;
  padding: 5px 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const CardTitle = styled.h1`
  font-size: 25px;
  color: #d9d9d9;
  margin-bottom: 8px;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #d9d9d9;
  margin-bottom: 8px;
`;

export const CardTech = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const TechFirst = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #f7df1e;
`;

export const TechSecond = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #678ff4;
`;

export const TechThird = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #f16529;
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
  font-size: 18px;
  font-weight: 400;
  border-radius: 15px;

  &:hover {
    box-shadow: 6px 4px 10px #a7a7a7;
    transition: 300ms ease;
  }
`;

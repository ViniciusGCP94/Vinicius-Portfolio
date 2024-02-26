import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 14vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #030303;
  border: 1px solid black;
`;

export const LogoStyled = styled.img`
  width: 10%;
  padding: 2px;
  border: 2px solid #d9d9d9;
  border-radius: 20px;
`;

export const Navigation = styled.nav`
  width: 600px;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const Menu = styled.ul`
  width: 90%;
  font-size: 20px;
  font-family: "JetBrains Mono", monospace;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d9d9d9;
`;

export const NavList = styled.li`
  padding: 0px 10px;
  list-style: none;
  cursor: pointer;
  border: 2px solid #030303;
  border-radius: 20px;

  &:hover {
    background-color: #d9d9d9;
    color: #030303;
    box-shadow: 5px 5px 10px #a7a7a7;
  }
`;

export const ButtonHeader = styled.button`
  padding: 5px 30px;
  font-size: 18px;
  font-weight: 600;
  font-family: "JetBrains Mono", monospace;
  border-radius: 20px;
  background-color: #d9d9d9;
  box-shadow: 6px 6px 10px #a7a7a7;

  &:hover {
    box-shadow: -6px 6px 10px #a7a7a7;
  }
`;

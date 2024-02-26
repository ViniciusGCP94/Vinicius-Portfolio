import {
  ButtonHeader,
  HeaderWrapper,
  LogoStyled,
  Menu,
  NavList,
  Navigation,
} from "./headerStyles";
import Logo from "../../assets/images/Logo-dvs.png";

function Header() {
  return (
    <HeaderWrapper>
      {" "}
      {/* Tela Inicial Header*/}
      <LogoStyled src={Logo} alt="Logo Dev-inicius" />
      {/* Menu Header*/}
      <Navigation>
        <Menu>
          <NavList>Home</NavList>
          <NavList>Sobre</NavList>
          <NavList>Portfolio</NavList>
          <NavList>Contatos</NavList>
        </Menu>
      </Navigation>
      <div>
        {/* Botão Header*/}
        <ButtonHeader>Fale Comigo</ButtonHeader>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

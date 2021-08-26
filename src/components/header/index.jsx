import React from 'react';
import { Nav, Container, SloganImage, LogoImage, CartIcon } from './styled';
import Slogan from '../../images/slogan.png';
import Logo from '../../images/icone.png';
import Cart from '../../images/cart-icon.svg';

const Header = () => {
  return (
    <Nav>
      <Container>
        <SloganImage src={Slogan} alt="Slogan: Game store, a casa dos games" />
      </Container>
      <Container>
        <LogoImage src={Logo} alt="Logo da game store" />
      </Container>
      <Container>
        <CartIcon src={Cart} alt="Ícone do carrinho de compras" />
      </Container>
    </Nav>
  );
};

export default Header;
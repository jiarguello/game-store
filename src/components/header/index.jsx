import React, { useContext } from 'react';
import { Nav, Container, SloganImage, LogoImage, CartIcon } from './styled';
import Slogan from '../../images/slogan.png';
import Logo from '../../images/icone.png';
import CartImage from '../../images/cart-icon.svg';
import CartMenu from '../cartMenu';
import Context from '../../context';

const Header = () => {
  const { showMenu, setShowMenu } = useContext(Context);
  return (
    <Nav>
      <Container>
        <SloganImage src={Slogan} alt="Slogan: Game store, a casa dos games" />
      </Container>
      <Container>
        <LogoImage src={Logo} alt="Logo da game store" />
      </Container>
      <Container>
        <CartIcon src={CartImage} onClick={ () => setShowMenu(!showMenu) } alt="Ícone do carrinho de compras" />
      </Container>
      { showMenu && <CartMenu /> }
    </Nav>
  );
};

export default Header;
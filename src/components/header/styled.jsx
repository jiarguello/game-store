import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 60px;
  height: 10%;
  background-color: ${(props) => props.theme.background.header };
  position: fixed;
  top: 0;

  @media(min-width: 1024px) {
    min-height: 90px;
    height: 12%;
    justify-content: center;
  };
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;

  @media(min-width: 1024px) {
  };
`;

export const SloganImage = styled.img`
  height: 1.5em;
  align-self: flex-start;

  @media(min-width: 1024px) {
    height: 3em;
  };
`;

export const LogoImage = styled.img`
  height: 3em;

  @media(min-width: 1024px) {
    height: 4.5em;
  };
`;

export const CartIcon = styled.img`
  height: 2em;
  min-height: 20px;
  align-self: flex-end;

  @media(min-width: 1024px) {
    height: 2.5em;
  };
`;
import React, { useContext } from 'react';
import Context from '../../context';
import * as S from './styled';
import formatPrice from '../../services/formatPrice';
import { Redirect } from 'react-router-dom';

const OrderSummary = () => {
  const { cart: { totalProducts, shipping }, redirect, setRedirect, setShowMenu } = useContext(Context);

  const goToCheckout = () => {
    setShowMenu(false);
    setRedirect(true);
  }

  return (
    <S.OrderSummaryContainer>
      <S.TextContainer>
        <S.Text>Produtos: {formatPrice(totalProducts)}</S.Text>
        <S.Text>Frete: {formatPrice(shipping)}</S.Text>
        <hr />
        <S.Text>Valor da compra: { formatPrice(totalProducts + shipping) }</S.Text>
      </S.TextContainer>
      <S.Button onClick={ goToCheckout } >Finalizar</S.Button>
      {
        redirect && <Redirect to="/purchase" />
      }
    </S.OrderSummaryContainer>
  );
};

export default OrderSummary;
